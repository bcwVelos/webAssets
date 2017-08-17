/**
 * 
 */
var toothExtractionSections = 20;
var surgerySections = 20;
var toothExtractionExcessiveBleedingArray= new Array(toothExtractionSections);
var toothExtractionTreatmentArray= new Array(toothExtractionSections);
var toothExtractionTreatedHowArray= new Array(toothExtractionSections);
var surgeryExcessiveBleedingArray= new Array(surgerySections);
var surgeryTreatmentArray= new Array(surgerySections);
var surgeryTreatedHowArray= new Array(surgerySections);

noseBleedVariables = {
	epistaxisTotalScore: 'fld10050_113083_117506',
	epistaxisPrimary: 'fld10050_113077_117500',
	epistaxisSeekMedAttn: 'fld10050_113079_117502',
	epistaxisTreatedHow: 'fld10050_113078_117501',
	epistaxisHowMany: 'fld10050_113080_117503',
	epistaxisHowLong: 'fld10050_113076_117499'
}

cutaneousVariables = {
	bruisingTotalScore: 'fld10050_113103_117526',
	bruisingPrimary: 'fld10050_113096_117519',
	bruisingMedicalAttention: 'fld10050_113092_117515',
	bruisingTreatedHow: 'fld10050_113097_117520',
	bruisingTrauma: 'fld10050_113098_117521',
	bruisingSize: 'fld10050_113099_117522',
	bruisingMultiple: 'fld10050_113093_117516'
}

minorWoundsVariables = {
	minorWoundsTotalScore: 'fld10050_113119_117542',
	minorWoundsPrimary: 'fld10050_113113_117536',
	minorWoundsSeekMedAttn: 'fld10050_113116_117539',
	minorWoundsTreatedHow: 'fld10050_113114_117537',
	minorWoundsHowMany: 'fld10050_113117_117540',
	minorWoundsHowLong: 'fld10050_113118_117541'
}

hematuriaVariables = {
	hematuriaTotalScore: 'fld10050_113137_117560',
	hematuriaPrimary: 'fld10050_113128_117551',
	hematuriaOtherIllness: 'fld10050_113129_117552',
	hematuriaSeekMedAttn: 'fld10050_113130_117553',
	hematuriaTreatedHow: 'fld10050_113133_117556',
}

giBleedingVariables = {
	giBleedingTotalScore: 'fld10050_113147_117570',
	giBleedingPrimary: 'fld10050_113143_117566',
	giBleedingOtherIllness: 'fld10050_113144_117567',
	giBleedingSeekMedAttn: 'fld10050_113145_117568',
	giBleedingTreatedHow: 'fld10050_113146_117569',
}

oralCavityVariables = {
	oralCavityTotalScore: 'fld10050_113163_117586',
	oralCavityPrimary: 'fld10050_113167_117590',
	oralCavitySeekMedAttn: 'fld10050_113160_117583',
	oralCavityTreatedHow: 'fld10050_113161_117584',
	oralCavityHowLong: 'fld10050_113162_117585'
}

toothExtractionVariables = {
	toothExtractionTotalScore: 'fld10050_113175_117598',
	toothExtractionPrimary: 'fld10050_113172_117595',
	toothExtractionExcessiveTimes: 'fld10050_113177_117600',
	toothExtractionHowManyTimes: 'fld10050_113173_117596',
	toothExtractionAddComment: 'fld10050_113171_117594',
	toothExtractionHeading: 'fld10050_113198_117621',
	toothExtractionAge: 'fld10050_113238_117661',
	toothExtractionWhatTeeth: 'fld10050_113258_117681',
	toothExtractionTreatmentGiven: 'fld10050_113218_117641',
	toothExtractionTreatmentPrevention: 'fld10050_113178_117601',
	toothExtractionExcessiveBleeding: 'fld10050_113278_117701',
	toothExtractionTreatment: 'fld10050_113358_117781',
	toothExtractionTreatedHow: 'fld10050_113318_117741',
	toothExtractionAddBtn: 'fld10050_113418_117841',
	toothExtractionDeleteBtn: 'fld10050_113438_117861'
}

surgeryVariables = {
	surgeryTotalScore: 'fld10050_113464_117887',
	surgeryPrimary: 'fld10050_113461_117884',
	surgeryExcessiveTimes: 'fld10050_113467_117890',
	surgeryHowManyTimes: 'fld10050_113462_117885',
	surgeryAddComment: 'fld10050_113463_117886',
	surgeryHeading: 'fld10050_113648_118071',
	surgeryAge : 'fld10050_113468_117891',
	surgeryType : 'fld10050_113528_117951',
	surgeryTypeDescribe : 'fld10050_113488_117911',
	surgeryTreatmentGiven : 'fld10050_113548_117971',
	surgeryTreatmentPrevention : 'fld10050_113568_117991',
	surgeryExcessiveBleeding: 'fld10050_113508_117931',
	surgeryTreatment: 'fld10050_113588_118011',
	surgeryTreatedHow: 'fld10050_113608_118031',
	surgeryAddBtn : 'fld10050_113768_118191',
	surgeryDeleteBtn : 'fld10050_113728_118151'
}

menstrualVariables = {
	menstrualTotalScore: 'fld10050_113812_118235',
	menstrualPrimary: 'fld10050_113806_118229',
	menstrualSpecify: 'fld10050_113810_118233',
	menstrualMedicalAttention: 'fld10050_113805_118228',
	menstrualTreatedHow: 'fld10050_113804_118227',
	menstrualTimeOffWork: 'fld10050_113801_118224',
	menstrualHowLong: 'fld10050_113803_118226',
	menstrualHospitalization: 'fld10050_113802_118225',
	menstrualPictoralScore: 'fld10050_113791_118214',
}

deliveryVariables = {
	deliveryTotalScore: 'fld10050_113828_118251',
	deliveryPrimary: 'fld10050_113825_118248',
	deliveryHowLong: 'fld10050_113826_118249',
	deliveryChangingPads: 'fld10050_113824_118247',
	deliveryHospital: 'fld10050_113818_118241',
	deliveryTreatment: 'fld10050_113822_118245',
	deliveryTreatedHow: 'fld10050_113817_118240'
}

hematomaVariables = {
	hematomaTotalScore: 'fld10050_113840_118263',
	hematomaPrimary: 'fld10050_113838_118261',
	hematomaType: 'fld10050_113842_118265',
	hematomaTreatment: 'fld10050_113835_118258',
	hematomaTreatedHow: 'fld10050_113839_118262',
}

hemarthrosisVariables = {
	hemarthrosisTotalScore: 'fld10050_113853_118276',
	hemarthrosisPrimary: 'fld10050_113852_118275',
	hemarthrosisType: 'fld10050_113848_118271',
	hemarthrosisTreatment: 'fld10050_113855_118278',
	hemarthrosisTreatedHow: 'fld10050_113858_118281'
}

cnsVariables = {
	cnsTotalScore: 'fld10050_113873_118296',
	cnsPrimary: 'fld10050_113872_118295',
	cnsType: 'fld10050_113870_118293',
	cnsSpecify: 'fld10050_113864_118287',
	cnsTreatment: 'fld10050_113865_118288',
	cnsTreatedHow: 'fld10050_113862_118285'
}

otherBleedingVariables = {
	otherBleedingTotalScore: 'fld10050_113883_118306',
	otherBleedingType: 'fld10050_113881_118304',
	otherBleedingTreatment: 'fld10050_113879_118302',
	otherBleedingTreatedHow: 'fld10050_113880_118303'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_113032_117455',
	totalScoreBottom: 'fld10050_113888_118311'
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
