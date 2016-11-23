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
	epistaxisPrimary: 'fld10050_108827_113233',
	epistaxisHowMany: 'fld10050_108819_113225',
	epistaxisHowLong: 'fld10050_108826_113232',
	epistaxisSeekMedAttn: 'fld10050_108818_113224',
	epistaxisTreatedHow: 'fld10050_108816_113222',
	epistaxisTotalScore: 'fld10050_108822_113228'
}

cutaneousVariables = {
	bruisingPrimary: 'fld10050_108833_113239',
	bruisingTrauma: 'fld10050_108837_113243',
	bruisingMedicalAttention: 'fld10050_108829_113235',
	bruisingTreatedHow: 'fld10050_108834_113240',
	bruisingMultiple: 'fld10050_108830_113236',
	bruisingTotalScore: 'fld10050_108842_113248'
}

minorWoundsVariables = {
	minorWoundsPrimary: 'fld10050_108849_113255',
	minorWoundsHowMany: 'fld10050_108854_113260',
	minorWoundsHowLong: 'fld10050_108856_113262',
	minorWoundsSeekMedAttn: 'fld10050_108853_113259',
	minorWoundsTreatedHow: 'fld10050_108850_113256',
	minorWoundsTotalScore: 'fld10050_108857_113263'
}

oralCavityVariables = {
	oralCavityPrimary: 'fld10050_108869_113275',
	oralCavitySeekMedAttn: 'fld10050_108861_113267',
	oralCavityTreatedHow: 'fld10050_108863_113269',
	oralCavityTotalScore: 'fld10050_108865_113271'
}

toothExtractionVariables = {
	toothExtractionPrimary: 'fld10050_108878_113284',
	toothExtractionHowManyTimes: 'fld10050_108881_113287',
	toothExtractionExcessiveTimes: 'fld10050_108875_113281',
	toothExtractionComment: 'fld10050_108877_113283',
	toothExtractionAddComment: 'fld10050_108876_113282',
	toothExtractionHeading: 'fld10050_108892_113298',
	toothExtractionAge: 'fld10050_108912_113318',
	toothExtractionWhatTeeth: 'fld10050_108922_113328',
	toothExtractionTreatmentGiven: 'fld10050_108902_113308',
	toothExtractionTreatmentPrevention: 'fld10050_108882_113288',
	toothExtractionExcessiveBleeding: 'fld10050_108932_113338',
	toothExtractionLength: 'fld10050_108942_113348',
	toothExtractionTreatment: 'fld10050_108962_113368',
	toothExtractionTreatedHow: 'fld10050_108952_113358',
	toothExtractionAddBtn: 'fld10050_109002_113408',
	toothExtractionDeleteBtn: 'fld10050_109012_113418',
	toothExtractionTotalScore: 'fld10050_108873_113279'
}

giBleedingVariables = {
	giBleedingPrimary: 'fld10050_109045_113451',
	giBleedingOtherIllness: 'fld10050_109047_113453',
	giBleedingSeekMedAttn: 'fld10050_109048_113454',
	giBleedingTreatedHow: 'fld10050_109049_113455',
	giBleedingTotalScore: 'fld10050_109050_113456'
}

hematuriaVariables = {
	hematuriaPrimary: 'fld10050_109056_113462',
	hematuriaSeekMedAttn: 'fld10050_109059_113465',
	hematuriaTreatedHow: 'fld10050_109060_113466',
	hematuriaTotalScore: 'fld10050_109065_113471'
}

surgeryVariables = {
	surgeryPrimary: 'fld10050_109071_113477',
	surgeryHowManyTimes: 'fld10050_109072_113478',
	surgeryExcessiveTimes: 'fld10050_109070_113476',
	surgeryAddComment: 'fld10050_109073_113479',
	surgeryHeading: 'fld10050_109216_113622',
	surgeryAge : 'fld10050_109416_113822',
	surgeryType : 'fld10050_109116_113522',
	surgeryTypeDescribe : 'fld10050_109076_113482',
	surgeryTreatmentGiven : 'fld10050_109136_113542',
	surgeryTreatmentPrevention : 'fld10050_109156_113562',
	surgeryExcessiveBleeding: 'fld10050_109096_113502',
	surgeryTime : 'fld10050_109176_113582',
	surgeryTreatment: 'fld10050_109196_113602',
	surgeryTreatedHow: 'fld10050_109376_113782',
	surgeryAddBtn : 'fld10050_109316_113722',
	surgeryDeleteBtn : 'fld10050_109356_113762',
	surgeryTotalScore: 'fld10050_109074_113480'
}

menstrualVariables = {
	menstrualPrimary: 'fld10050_109451_113857',
	menstrualHowLong: 'fld10050_109458_113864',
	menstrualPassClots: 'fld10050_109460_113866',
	menstrualHeaviestDay: 'fld10050_109461_113867',
	menstrualExcessiveBleeding: 'fld10050_109462_113868',
	menstrualHowLongExcessive: 'fld10050_109446_113852',
	menstrualMedicalAttention: 'fld10050_109450_113856',
	menstrualReceiveTreatment: 'fld10050_109447_113853',
	menstrualTreatedHow: 'fld10050_109448_113854',
	menstrualHospitalization: 'fld10050_109445_113851',
	menstrualTimeOffWork: 'fld10050_109443_113849',
	menstrualPictoralScore: 'fld10050_109437_113843',
	menstrualTotalScore: 'fld10050_109465_113871'
}

deliveryVariables = {
	deliveryPrimary: 'fld10050_109473_113879',
	deliveryAddComment: 'fld10050_109475_113881',
	deliveryHeading: 'fld10050_109478_113884',
	deliveryAge: 'fld10050_109628_114034',
	deliveryType: 'fld10050_109598_114004',
	deliveryTreatmentGiven: 'fld10050_109608_114014',
	deliveryTreatmentPrevention: 'fld10050_109618_114024',
	deliveryExcessiveBleeding: 'fld10050_109568_113974',
	deliveryTime: 'fld10050_109578_113984',
	deliveryTreatment: 'fld10050_109638_114044',
	deliveryTreatedHow: 'fld10050_109648_114054',
	deliveryHospital: 'fld10050_109588_113994',
	deliveryAddBtn : 'fld10050_109538_113944',
	deliveryDeleteBtn : 'fld10050_109548_113954',
	deliveryTotalScore: 'fld10050_109476_113882'
}

otherBleedingVariables = {
	otherNeonatalExcessive: 'fld10050_109661_114067',
	otherNeonatalType: 'fld10050_109665_114071',
	otherNeonatalTreatment: 'fld10050_109662_114068',
	otherNeonatalTreatedHow: 'fld10050_109664_114070',
	otherBleedingTotalScore: 'fld10050_109670_114076'
}

cnsVariables = {
	cnsPrimary: 'fld10050_109679_114085',
	cnsAddComment: 'fld10050_109678_114084',
	cnsHeading: 'fld10050_109722_114128',
	cnsAge: 'fld10050_109742_114148',
	cnsTreatment: 'fld10050_109752_114158',
	cnsTreatedHow: 'fld10050_109732_114138',
	cnsAddBtn: 'fld10050_109692_114098',
	cnsDeleteBtn: 'fld10050_109702_114108',
	cnsTotalScore: 'fld10050_109680_114086'
}

hemarthrosisVariables = {
	hemarthrosisPrimary: 'fld10050_109764_114170',
	hemarthrosisAddComment: 'fld10050_109763_114169',
	hemarthrosisHeading: 'fld10050_109768_114174',
	hemarthrosisAge: 'fld10050_109788_114194',
	hemarthrosisType: 'fld10050_109848_114254',
	hemarthrosisTypeOther: 'fld10050_109908_114314',
	hemarthrosisLocation: 'fld10050_109868_114274',
	hemarthrosisTreatment: 'fld10050_109808_114214',
	hemarthrosisTreatedHow: 'fld10050_109828_114234',
	hemarthrosisAddBtn: 'fld10050_109968_114374',
	hemarthrosisDeleteBtn: 'fld10050_109988_114394',
	hemarthrosisTotalScore: 'fld10050_109766_114172'
}

hematomaVariables = {
	hematomaPrimary: 'fld10050_110010_114416',
	hematomaAddComment: 'fld10050_110009_114415',
	hematomaHeading: 'fld10050_110014_114420',
	hematomaAge: 'fld10050_110064_114470',
	hematomaType: 'fld10050_110034_114440',
	hematomaTypeOther: 'fld10050_110074_114480',
	hematomaLocation: 'fld10050_110044_114450',
	hematomaTreatment: 'fld10050_110054_114460',
	hematomaTreatedHow: 'fld10050_110024_114430',
	hematomaAddBtn: 'fld10050_110104_114510',
	hematomaDeleteBtn: 'fld10050_110114_114520',
	hematomaTotalScore: 'fld10050_110012_114418'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_108791_113197',
	totalScoreBottom: 'fld10050_110153_114559'
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
