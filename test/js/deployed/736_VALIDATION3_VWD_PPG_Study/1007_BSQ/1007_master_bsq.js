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
	epistaxisPrimary: 'fld10050_139228_142853',
	epistaxisHowMany: 'fld10050_139234_142859',
	epistaxisHowLong: 'fld10050_139227_142852',
	epistaxisSeekMedAttn: 'fld10050_139233_142858',
	epistaxisTreatedHow: 'fld10050_139231_142856',
	epistaxisTotalScore: 'fld10050_139237_142862'
}

cutaneousVariables = {
	bruisingPrimary: 'fld10050_139245_142870',
	bruisingTrauma: 'fld10050_139249_142874',
	bruisingMedicalAttention: 'fld10050_139241_142866',
	bruisingTreatedHow: 'fld10050_139246_142871',
	bruisingMultiple: 'fld10050_139242_142867',
	bruisingTotalScore: 'fld10050_139254_142879'
}

minorWoundsVariables = {
	minorWoundsPrimary: 'fld10050_139261_142886',
	minorWoundsHowMany: 'fld10050_139266_142891',
	minorWoundsHowLong: 'fld10050_139268_142893',
	minorWoundsSeekMedAttn: 'fld10050_139265_142890',
	minorWoundsTreatedHow: 'fld10050_139262_142887',
	minorWoundsTotalScore: 'fld10050_139269_142894'
}

oralCavityVariables = {
	oralCavityPrimary: 'fld10050_139276_142901',
	oralCavitySeekMedAttn: 'fld10050_139278_142903',
	oralCavityTreatedHow: 'fld10050_139280_142905',
	oralCavityTotalScore: 'fld10050_139272_142897'
}

toothExtractionVariables = {
	toothExtractionPrimary: 'fld10050_139284_142909',
	toothExtractionHowManyTimes: 'fld10050_139287_142912',
	toothExtractionExcessiveTimes: 'fld10050_139293_142918',
	toothExtractionComment: 'fld10050_139283_142908',
	toothExtractionAddComment: 'fld10050_139282_142907',
	toothExtractionHeading: 'fld10050_139304_142929',
	toothExtractionAge: 'fld10050_139324_142949',
	toothExtractionWhatTeeth: 'fld10050_139334_142959',
	toothExtractionTreatmentGiven: 'fld10050_139314_142939',
	toothExtractionTreatmentPrevention: 'fld10050_139294_142919',
	toothExtractionExcessiveBleeding: 'fld10050_139344_142969',
	toothExtractionLength: 'fld10050_139354_142979',
	toothExtractionTreatment: 'fld10050_139384_143009',
	toothExtractionTreatedHow: 'fld10050_139364_142989',
	toothExtractionAddBtn: 'fld10050_139434_143059',
	toothExtractionDeleteBtn: 'fld10050_139444_143069',
	toothExtractionTotalScore: 'fld10050_139291_142916'
}

giBleedingVariables = {
	giBleedingPrimary: 'fld10050_139456_143081',
	giBleedingOtherIllness: 'fld10050_139458_143083',
	giBleedingSeekMedAttn: 'fld10050_139459_143084',
	giBleedingTreatedHow: 'fld10050_139460_143085',
	giBleedingTotalScore: 'fld10050_139461_143086'
}

hematuriaVariables = {
	hematuriaPrimary: 'fld10050_139477_143102',
	hematuriaSeekMedAttn: 'fld10050_139479_143104',
	hematuriaTreatedHow: 'fld10050_139468_143093',
	hematuriaTotalScore: 'fld10050_139473_143098'
}

surgeryVariables = {
	surgeryPrimary: 'fld10050_139483_143108',
	surgeryHowManyTimes: 'fld10050_139484_143109',
	surgeryExcessiveTimes: 'fld10050_139482_143107',
	surgeryAddComment: 'fld10050_139485_143110',
	surgeryHeading: 'fld10050_139688_143313',
	surgeryAge : 'fld10050_139488_143113',
	surgeryType : 'fld10050_139548_143173',
	surgeryTypeDescribe : 'fld10050_139508_143133',
	surgeryTreatmentGiven : 'fld10050_139568_143193',
	surgeryTreatmentPrevention : 'fld10050_139588_143213',
	surgeryExcessiveBleeding: 'fld10050_139528_143153',
	surgeryTime : 'fld10050_139608_143233',
	surgeryTreatment: 'fld10050_139628_143253',
	surgeryTreatedHow: 'fld10050_139648_143273',
	surgeryAddBtn : 'fld10050_139808_143433',
	surgeryDeleteBtn : 'fld10050_139748_143373',
	surgeryTotalScore: 'fld10050_139486_143111'
}

menstrualVariables = {
	menstrualPrimary: 'fld10050_139872_143497',
	menstrualHowLong: 'fld10050_139879_143504',
	menstrualPassClots: 'fld10050_139881_143506',
	menstrualHeaviestDay: 'fld10050_139882_143507',
	menstrualExcessiveBleeding: 'fld10050_139849_143474',
	menstrualHowLongExcessive: 'fld10050_139867_143492',
	menstrualMedicalAttention: 'fld10050_139871_143496',
	menstrualReceiveTreatment: 'fld10050_139868_143493',
	menstrualTreatedHow: 'fld10050_139869_143494',
	menstrualHospitalization: 'fld10050_139866_143491',
	menstrualTimeOffWork: 'fld10050_139864_143489',
	menstrualPictoralScore: 'fld10050_139858_143483',
	menstrualTotalScore: 'fld10050_139852_143477'
}

deliveryVariables = {
	deliveryPrimary: 'fld10050_139885_143510',
	deliveryAddComment: 'fld10050_139887_143512',
	deliveryHeading: 'fld10050_139990_143615',
	deliveryAge: 'fld10050_139890_143515',
	deliveryType: 'fld10050_139960_143585',
	deliveryTreatmentGiven: 'fld10050_139970_143595',
	deliveryTreatmentPrevention: 'fld10050_139980_143605',
	deliveryExcessiveBleeding: 'fld10050_139920_143545',
	deliveryTime: 'fld10050_139930_143555',
	deliveryTreatment: 'fld10050_139900_143525',
	deliveryTreatedHow: 'fld10050_139910_143535',
	deliveryHospital: 'fld10050_139940_143565',
	deliveryAddBtn : 'fld10050_140050_143675',
	deliveryDeleteBtn : 'fld10050_140060_143685',
	deliveryTotalScore: 'fld10050_139888_143513'
}

otherBleedingVariables = {
	otherNeonatalExcessive: 'fld10050_140073_143698',
	otherNeonatalType: 'fld10050_140077_143702',
	otherNeonatalTreatment: 'fld10050_140074_143699',
	otherNeonatalTreatedHow: 'fld10050_140076_143701',
	otherBleedingTotalScore: 'fld10050_140082_143707'
}

cnsVariables = {
	cnsPrimary: 'fld10050_140091_143716',
	cnsAddComment: 'fld10050_140090_143715',
	cnsHeading: 'fld10050_140134_143759',
	cnsAge: 'fld10050_140154_143779',
	cnsTreatment: 'fld10050_140164_143789',
	cnsTreatedHow: 'fld10050_140144_143769',
	cnsAddBtn: 'fld10050_140104_143729',
	cnsDeleteBtn: 'fld10050_140114_143739',
	cnsTotalScore: 'fld10050_140092_143717'
}

hemarthrosisVariables = {
	hemarthrosisPrimary: 'fld10050_140176_143801',
	hemarthrosisAddComment: 'fld10050_140175_143800',
	hemarthrosisHeading: 'fld10050_140180_143805',
	hemarthrosisAge: 'fld10050_140200_143825',
	hemarthrosisType: 'fld10050_140260_143885',
	hemarthrosisTypeOther: 'fld10050_140320_143945',
	hemarthrosisLocation: 'fld10050_140280_143905',
	hemarthrosisTreatment: 'fld10050_140220_143845',
	hemarthrosisTreatedHow: 'fld10050_140240_143865',
	hemarthrosisAddBtn: 'fld10050_140400_144025',
	hemarthrosisDeleteBtn: 'fld10050_140360_143985',
	hemarthrosisTotalScore: 'fld10050_140178_143803'
}

hematomaVariables = {
	hematomaPrimary: 'fld10050_140422_144047',
	hematomaAddComment: 'fld10050_140421_144046',
	hematomaHeading: 'fld10050_140536_144161',
	hematomaAge: 'fld10050_140466_144091',
	hematomaType: 'fld10050_140436_144061',
	hematomaTypeOther: 'fld10050_140476_144101',
	hematomaLocation: 'fld10050_140446_144071',
	hematomaTreatment: 'fld10050_140456_144081',
	hematomaTreatedHow: 'fld10050_140426_144051',
	hematomaAddBtn: 'fld10050_140516_144141',
	hematomaDeleteBtn: 'fld10050_140486_144111',
	hematomaTotalScore: 'fld10050_140424_144049'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_139203_142828',
	totalScoreBottom: 'fld10050_140553_144178'
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
