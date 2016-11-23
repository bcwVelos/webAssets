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
	epistaxisPrimary: 'fld10050_107451_111856',
	epistaxisHowMany: 'fld10050_107443_111848',
	epistaxisHowLong: 'fld10050_107450_111855',
	epistaxisSeekMedAttn: 'fld10050_107442_111847',
	epistaxisTreatedHow: 'fld10050_107440_111845',
	epistaxisTotalScore: 'fld10050_107446_111851'
}

cutaneousVariables = {
	bruisingPrimary: 'fld10050_107457_111862',
	bruisingTrauma: 'fld10050_107461_111866',
	bruisingMedicalAttention: 'fld10050_107453_111858',
	bruisingTreatedHow: 'fld10050_107458_111863',
	bruisingMultiple: 'fld10050_107454_111859',
	bruisingTotalScore: 'fld10050_107466_111871'
}

minorWoundsVariables = {
	minorWoundsPrimary: 'fld10050_107473_111878',
	minorWoundsHowMany: 'fld10050_107478_111883',
	minorWoundsHowLong: 'fld10050_107480_111885',
	minorWoundsSeekMedAttn: 'fld10050_107477_111882',
	minorWoundsTreatedHow: 'fld10050_107474_111879',
	minorWoundsTotalScore: 'fld10050_107481_111886'
}

oralCavityVariables = {
	oralCavityPrimary: 'fld10050_107493_111898',
	oralCavitySeekMedAttn: 'fld10050_107485_111890',
	oralCavityTreatedHow: 'fld10050_107487_111892',
	oralCavityTotalScore: 'fld10050_107489_111894'
}

toothExtractionVariables = {
	toothExtractionPrimary: 'fld10050_107502_111907',
	toothExtractionHowManyTimes: 'fld10050_107505_111910',
	toothExtractionExcessiveTimes: 'fld10050_107499_111904',
	toothExtractionComment: 'fld10050_107501_111906',
	toothExtractionAddComment: 'fld10050_107500_111905',
	toothExtractionHeading: 'fld10050_107516_111921',
	toothExtractionAge: 'fld10050_107536_111941',
	toothExtractionWhatTeeth: 'fld10050_107546_111951',
	toothExtractionTreatmentGiven: 'fld10050_107526_111931',
	toothExtractionTreatmentPrevention: 'fld10050_107506_111911',
	toothExtractionExcessiveBleeding: 'fld10050_107556_111961',
	toothExtractionLength: 'fld10050_107566_111971',
	toothExtractionTreatment: 'fld10050_107586_111991',
	toothExtractionTreatedHow: 'fld10050_107576_111981',
	toothExtractionAddBtn: 'fld10050_107626_112031',
	toothExtractionDeleteBtn: 'fld10050_107636_112041',
	toothExtractionTotalScore: 'fld10050_107497_111902'
}

giBleedingVariables = {
	giBleedingPrimary: 'fld10050_107669_112074',
	giBleedingOtherIllness: 'fld10050_107671_112076',
	giBleedingSeekMedAttn: 'fld10050_107672_112077',
	giBleedingTreatedHow: 'fld10050_107673_112078',
	giBleedingTotalScore: 'fld10050_107674_112079'
}

hematuriaVariables = {
	hematuriaPrimary: 'fld10050_107680_112085',
	hematuriaSeekMedAttn: 'fld10050_107683_112088',
	hematuriaTreatedHow: 'fld10050_107684_112089',
	hematuriaTotalScore: 'fld10050_107689_112094'
}

surgeryVariables = {
	surgeryPrimary: 'fld10050_107695_112100',
	surgeryHowManyTimes: 'fld10050_107696_112101',
	surgeryExcessiveTimes: 'fld10050_107694_112099',
	surgeryAddComment: 'fld10050_107697_112102',
	surgeryHeading: 'fld10050_107840_112245',
	surgeryAge : 'fld10050_108040_112445',
	surgeryType : 'fld10050_107740_112145',
	surgeryTypeDescribe : 'fld10050_107700_112105',
	surgeryTreatmentGiven : 'fld10050_107760_112165',
	surgeryTreatmentPrevention : 'fld10050_107780_112185',
	surgeryExcessiveBleeding: 'fld10050_107720_112125',
	surgeryTime : 'fld10050_107800_112205',
	surgeryTreatment: 'fld10050_107820_112225',
	surgeryTreatedHow: 'fld10050_108000_112405',
	surgeryAddBtn : 'fld10050_107940_112345',
	surgeryDeleteBtn : 'fld10050_107980_112385',
	surgeryTotalScore: 'fld10050_107698_112103'
}

menstrualVariables = {
	menstrualPrimary: 'fld10050_108075_112480',
	menstrualHowLong: 'fld10050_108082_112487',
	menstrualPassClots: 'fld10050_108084_112489',
	menstrualHeaviestDay: 'fld10050_108085_112490',
	menstrualExcessiveBleeding: 'fld10050_108086_112491',
	menstrualHowLongExcessive: 'fld10050_108070_112475',
	menstrualMedicalAttention: 'fld10050_108074_112479',
	menstrualReceiveTreatment: 'fld10050_108071_112476',
	menstrualTreatedHow: 'fld10050_108072_112477',
	menstrualHospitalization: 'fld10050_108069_112474',
	menstrualTimeOffWork: 'fld10050_108067_112472',
	menstrualPictoralScore: 'fld10050_108061_112466',
	menstrualTotalScore: 'fld10050_108089_112494'
}

deliveryVariables = {
	deliveryPrimary: 'fld10050_108097_112502',
	deliveryAddComment: 'fld10050_108099_112504',
	deliveryHeading: 'fld10050_108102_112507',
	deliveryAge: 'fld10050_108252_112657',
	deliveryType: 'fld10050_108222_112627',
	deliveryTreatmentGiven: 'fld10050_108232_112637',
	deliveryTreatmentPrevention: 'fld10050_108242_112647',
	deliveryExcessiveBleeding: 'fld10050_108192_112597',
	deliveryTime: 'fld10050_108202_112607',
	deliveryTreatment: 'fld10050_108262_112667',
	deliveryTreatedHow: 'fld10050_108272_112677',
	deliveryHospital: 'fld10050_108212_112617',
	deliveryAddBtn : 'fld10050_108162_112567',
	deliveryDeleteBtn : 'fld10050_108172_112577',
	deliveryTotalScore: 'fld10050_108100_112505'
}

otherBleedingVariables = {
	otherNeonatalExcessive: 'fld10050_108285_112690',
	otherNeonatalType: 'fld10050_108289_112694',
	otherNeonatalTreatment: 'fld10050_108286_112691',
	otherNeonatalTreatedHow: 'fld10050_108288_112693',
	otherBleedingTotalScore: 'fld10050_108294_112699'
}

cnsVariables = {
	cnsPrimary: 'fld10050_108303_112708',
	cnsAddComment: 'fld10050_108302_112707',
	cnsHeading: 'fld10050_108346_112751',
	cnsAge: 'fld10050_108366_112771',
	cnsTreatment: 'fld10050_108376_112781',
	cnsTreatedHow: 'fld10050_108356_112761',
	cnsAddBtn: 'fld10050_108316_112721',
	cnsDeleteBtn: 'fld10050_108326_112731',
	cnsTotalScore: 'fld10050_108304_112709'
}

hemarthrosisVariables = {
	hemarthrosisPrimary: 'fld10050_108388_112793',
	hemarthrosisAddComment: 'fld10050_108387_112792',
	hemarthrosisHeading: 'fld10050_108392_112797',
	hemarthrosisAge: 'fld10050_108412_112817',
	hemarthrosisType: 'fld10050_108472_112877',
	hemarthrosisTypeOther: 'fld10050_108532_112937',
	hemarthrosisLocation: 'fld10050_108492_112897',
	hemarthrosisTreatment: 'fld10050_108432_112837',
	hemarthrosisTreatedHow: 'fld10050_108452_112857',
	hemarthrosisAddBtn: 'fld10050_108592_112997',
	hemarthrosisDeleteBtn: 'fld10050_108612_113017',
	hemarthrosisTotalScore: 'fld10050_108390_112795'
}

hematomaVariables = {
	hematomaPrimary: 'fld10050_108634_113039',
	hematomaAddComment: 'fld10050_108633_113038',
	hematomaHeading: 'fld10050_108638_113043',
	hematomaAge: 'fld10050_108688_113093',
	hematomaType: 'fld10050_108658_113063',
	hematomaTypeOther: 'fld10050_108698_113103',
	hematomaLocation: 'fld10050_108668_113073',
	hematomaTreatment: 'fld10050_108678_113083',
	hematomaTreatedHow: 'fld10050_108648_113053',
	hematomaAddBtn: 'fld10050_108728_113133',
	hematomaDeleteBtn: 'fld10050_108738_113143',
	hematomaTotalScore: 'fld10050_108636_113041'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_107415_111820',
	totalScoreBottom: 'fld10050_108777_113182'
}

var formStatus = document.getElementsByName('er_def_formstat');

$j(document).ready(function() {
	
	$j('.[class^="calculateBtn"]').click(function(event) {
		if (formStatus[0].value == '15736')
			testMapping();
		calcTotalScore();
	});
	
	$j('.[id^="eSign"]').focus(function(event) {
		calcTotalScore();
	});
});
