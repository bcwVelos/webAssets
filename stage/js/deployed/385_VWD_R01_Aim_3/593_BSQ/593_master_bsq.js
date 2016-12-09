/**
 * 
 */
var toothExtractionSections = 10;
var surgerySections = 10;
var deliverySections = 10;
var cnsSections = 10;
var hemarthrosisSections = 10;
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
	epistaxisPrimary: 'fld10050_40394_43609',
	epistaxisHowMany: 'fld10050_40400_43615',
	epistaxisHowLong: 'fld10050_40393_43608',
	epistaxisSeekMedAttn: 'fld10050_40399_43614',
	epistaxisTreatedHow: 'fld10050_40397_43612',
	epistaxisTotalScore: 'fld10050_40403_43618'
}

cutaneousVariables = {
	bruisingPrimary: 'fld10050_40411_43626',
	bruisingTrauma: 'fld10050_40415_43630',
	bruisingMedicalAttention: 'fld10050_40407_43622',
	bruisingTreatedHow: 'fld10050_40412_43627',
	bruisingMultiple: 'fld10050_40408_43623',
	bruisingTotalScore: 'fld10050_40420_43635'
}

minorWoundsVariables = {
	minorWoundsPrimary: 'fld10050_40427_43642',
	minorWoundsHowMany: 'fld10050_40432_43647',
	minorWoundsHowLong: 'fld10050_40434_43649',
	minorWoundsSeekMedAttn: 'fld10050_40431_43646',
	minorWoundsTreatedHow: 'fld10050_40428_43643',
	minorWoundsTotalScore: 'fld10050_40435_43650'
}

oralCavityVariables = {
	oralCavityPrimary: 'fld10050_40439_43654',
	oralCavitySeekMedAttn: 'fld10050_40441_43656',
	oralCavityTreatedHow: 'fld10050_40443_43658',
	oralCavityTotalScore: 'fld10050_40445_43660'
}

toothExtractionVariables = {
	toothExtractionPrimary: 'fld10050_40450_43665',
	toothExtractionHowManyTimes: 'fld10050_40453_43668',
	toothExtractionExcessiveTimes: 'fld10050_40459_43674',
	toothExtractionComment: 'fld10050_40449_43664',
	toothExtractionAddComment: 'fld10050_40448_43663',
	toothExtractionHeading: 'fld10050_40470_43685',
	toothExtractionAge: 'fld10050_40490_43705',
	toothExtractionWhatTeeth: 'fld10050_40500_43715',
	toothExtractionTreatmentGiven: 'fld10050_40480_43695',
	toothExtractionTreatmentPrevention: 'fld10050_40460_43675',
	toothExtractionExcessiveBleeding: 'fld10050_40510_43725',
	toothExtractionLength: 'fld10050_40520_43735',
	toothExtractionTreatment: 'fld10050_40540_43755',
	toothExtractionTreatedHow: 'fld10050_40530_43745',
	toothExtractionAddBtn: 'fld10050_40590_43805',
	toothExtractionDeleteBtn: 'fld10050_40600_43815',
	toothExtractionTotalScore: 'fld10050_40457_43672'
}

giBleedingVariables = {
	giBleedingPrimary: 'fld10050_40625_43840',
	giBleedingOtherIllness: 'fld10050_40627_43842',
	giBleedingSeekMedAttn: 'fld10050_40628_43843',
	giBleedingTreatedHow: 'fld10050_40629_43844',
	giBleedingTotalScore: 'fld10050_40630_43845'
}

hematuriaVariables = {
	hematuriaPrimary: 'fld10050_40634_43849',
	hematuriaSeekMedAttn: 'fld10050_40637_43852',
	hematuriaTreatedHow: 'fld10050_40638_43853',
	hematuriaTotalScore: 'fld10050_40643_43858'
}

surgeryVariables = {
	surgeryPrimary: 'fld10050_40649_43864',
	surgeryHowManyTimes: 'fld10050_40650_43865',
	surgeryExcessiveTimes: 'fld10050_40648_43863',
	surgeryAddComment: 'fld10050_40651_43866',
	surgeryHeading: 'fld10050_40744_43959',
	surgeryAge : 'fld10050_40654_43869',
	surgeryType : 'fld10050_40684_43899',
	surgeryTypeDescribe : 'fld10050_40664_43879',
	surgeryTreatmentGiven : 'fld10050_40694_43909',
	surgeryTreatmentPrevention : 'fld10050_40704_43919',
	surgeryExcessiveBleeding: 'fld10050_40674_43889',
	surgeryTime : 'fld10050_40714_43929',
	surgeryTreatment: 'fld10050_40724_43939',
	surgeryTreatedHow: 'fld10050_40734_43949',
	surgeryAddBtn : 'fld10050_40804_44019',
	surgeryDeleteBtn : 'fld10050_40814_44029',
	surgeryTotalScore: 'fld10050_40652_43867'
}

menstrualVariables = {
	menstrualPrimary: 'fld10050_40843_44058',
	menstrualHowLong: 'fld10050_40850_44065',
	menstrualPassClots: 'fld10050_40852_44067',
	menstrualHeaviestDay: 'fld10050_40853_44068',
	menstrualExcessiveBleeding: 'fld10050_40854_44069',
	menstrualHowLongExcessive: 'fld10050_40838_44053',
	menstrualMedicalAttention: 'fld10050_40842_44057',
	menstrualReceiveTreatment: 'fld10050_40839_44054',
	menstrualTreatedHow: 'fld10050_40840_44055',
	menstrualHospitalization: 'fld10050_40837_44052',
	menstrualTimeOffWork: 'fld10050_40835_44050',
	menstrualPictoralScore: 'fld10050_40863_44078',
	menstrualTotalScore: 'fld10050_40857_44072'
}

deliveryVariables = {
	deliveryPrimary: 'fld10050_40871_44086',
	deliveryAddComment: 'fld10050_40873_44088',
	deliveryHeading: 'fld10050_40966_44181',
	deliveryAge: 'fld10050_40876_44091',
	deliveryType: 'fld10050_40936_44151',
	deliveryTreatmentGiven: 'fld10050_40946_44161',
	deliveryTreatmentPrevention: 'fld10050_40956_44171',
	deliveryExcessiveBleeding: 'fld10050_40906_44121',
	deliveryTime: 'fld10050_40916_44131',
	deliveryTreatment: 'fld10050_40886_44101',
	deliveryTreatedHow: 'fld10050_40896_44111',
	deliveryHospital: 'fld10050_40926_44141',
	deliveryAddBtn : 'fld10050_41026_44241',
	deliveryDeleteBtn : 'fld10050_41036_44251',
	deliveryTotalScore: 'fld10050_40874_44089'
}

otherBleedingVariables = {
	otherNeonatalExcessive: 'fld10050_41059_44274',
	otherNeonatalType: 'fld10050_41063_44278',
	otherNeonatalTreatment: 'fld10050_41060_44275',
	otherNeonatalTreatedHow: 'fld10050_41062_44277',
	otherBleedingTotalScore: 'fld10050_41068_44283'
}

cnsVariables = {
	cnsPrimary: 'fld10050_41077_44292',
	cnsAddComment: 'fld10050_41076_44291',
	cnsHeading: 'fld10050_41080_44295',
	cnsAge: 'fld10050_41100_44315',
	cnsTreatment: 'fld10050_41110_44325',
	cnsTreatedHow: 'fld10050_41090_44305',
	cnsAddBtn: 'fld10050_41130_44345',
	cnsDeleteBtn: 'fld10050_41140_44355',
	cnsTotalScore: 'fld10050_41078_44293'
}

hemarthrosisVariables = {
	hemarthrosisPrimary: 'fld10050_41162_44377',
	hemarthrosisAddComment: 'fld10050_41161_44376',
	hemarthrosisHeading: 'fld10050_41166_44381',
	hemarthrosisAge: 'fld10050_41176_44391',
	hemarthrosisType: 'fld10050_41206_44421',
	hemarthrosisTypeOther: 'fld10050_41236_44451',
	hemarthrosisLocation: 'fld10050_41216_44431',
	hemarthrosisTreatment: 'fld10050_41186_44401',
	hemarthrosisTreatedHow: 'fld10050_41196_44411',
	hemarthrosisAddBtn: 'fld10050_41266_44481',
	hemarthrosisDeleteBtn: 'fld10050_41276_44491',
	hemarthrosisTotalScore: 'fld10050_41164_44379'
}

hematomaVariables = {
	hematomaPrimary: 'fld10050_41288_44503',
	hematomaAddComment: 'fld10050_41287_44502',
	hematomaHeading: 'fld10050_41292_44507',
	hematomaAge: 'fld10050_41342_44557',
	hematomaType: 'fld10050_41312_44527',
	hematomaTypeOther: 'fld10050_41352_44567',
	hematomaLocation: 'fld10050_41322_44537',
	hematomaTreatment: 'fld10050_41332_44547',
	hematomaTreatedHow: 'fld10050_41302_44517',
	hematomaAddBtn: 'fld10050_41382_44597',
	hematomaDeleteBtn: 'fld10050_41392_44607',
	hematomaTotalScore: 'fld10050_41290_44505'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_40369_43584',
	totalScoreBottom: 'fld10050_41431_44646'
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
