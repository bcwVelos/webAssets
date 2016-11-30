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
	epistaxisPrimary: 'fld10050_141990_145617',
	epistaxisHowMany: 'fld10050_141996_145623',
	epistaxisHowLong: 'fld10050_141989_145616',
	epistaxisSeekMedAttn: 'fld10050_141995_145622',
	epistaxisTreatedHow: 'fld10050_141993_145620',
	epistaxisTotalScore: 'fld10050_141999_145626'
}

cutaneousVariables = {
	bruisingPrimary: 'fld10050_142007_145634',
	bruisingTrauma: 'fld10050_142011_145638',
	bruisingMedicalAttention: 'fld10050_142003_145630',
	bruisingTreatedHow: 'fld10050_142008_145635',
	bruisingMultiple: 'fld10050_142004_145631',
	bruisingTotalScore: 'fld10050_142016_145643'
}

minorWoundsVariables = {
	minorWoundsPrimary: 'fld10050_142023_145650',
	minorWoundsHowMany: 'fld10050_142028_145655',
	minorWoundsHowLong: 'fld10050_142030_145657',
	minorWoundsSeekMedAttn: 'fld10050_142027_145654',
	minorWoundsTreatedHow: 'fld10050_142024_145651',
	minorWoundsTotalScore: 'fld10050_142031_145658'
}

oralCavityVariables = {
	oralCavityPrimary: 'fld10050_142043_145670',
	oralCavitySeekMedAttn: 'fld10050_142035_145662',
	oralCavityTreatedHow: 'fld10050_142037_145664',
	oralCavityTotalScore: 'fld10050_142039_145666'
}

toothExtractionVariables = {
	toothExtractionPrimary: 'fld10050_142046_145673',
	toothExtractionHowManyTimes: 'fld10050_142049_145676',
	toothExtractionExcessiveTimes: 'fld10050_142055_145682',
	toothExtractionComment: 'fld10050_142045_145672',
	toothExtractionAddComment: 'fld10050_142044_145671',
	toothExtractionHeading: 'fld10050_142066_145693',
	toothExtractionAge: 'fld10050_142086_145713',
	toothExtractionWhatTeeth: 'fld10050_142096_145723',
	toothExtractionTreatmentGiven: 'fld10050_142076_145703',
	toothExtractionTreatmentPrevention: 'fld10050_142056_145683',
	toothExtractionExcessiveBleeding: 'fld10050_142106_145733',
	toothExtractionLength: 'fld10050_142116_145743',
	toothExtractionTreatment: 'fld10050_142146_145773',
	toothExtractionTreatedHow: 'fld10050_142126_145753',
	toothExtractionAddBtn: 'fld10050_142196_145823',
	toothExtractionDeleteBtn: 'fld10050_142206_145833',
	toothExtractionTotalScore: 'fld10050_142053_145680'
}

giBleedingVariables = {
	giBleedingPrimary: 'fld10050_142218_145845',
	giBleedingOtherIllness: 'fld10050_142220_145847',
	giBleedingSeekMedAttn: 'fld10050_142221_145848',
	giBleedingTreatedHow: 'fld10050_142222_145849',
	giBleedingTotalScore: 'fld10050_142223_145850'
}

hematuriaVariables = {
	hematuriaPrimary: 'fld10050_142239_145866',
	hematuriaSeekMedAttn: 'fld10050_142241_145868',
	hematuriaTreatedHow: 'fld10050_142230_145857',
	hematuriaTotalScore: 'fld10050_142235_145862'
}

surgeryVariables = {
	surgeryPrimary: 'fld10050_142245_145872',
	surgeryHowManyTimes: 'fld10050_142246_145873',
	surgeryExcessiveTimes: 'fld10050_142244_145871',
	surgeryAddComment: 'fld10050_142247_145874',
	surgeryHeading: 'fld10050_142450_146077',
	surgeryAge : 'fld10050_142250_145877',
	surgeryType : 'fld10050_142310_145937',
	surgeryTypeDescribe : 'fld10050_142270_145897',
	surgeryTreatmentGiven : 'fld10050_142330_145957',
	surgeryTreatmentPrevention : 'fld10050_142350_145977',
	surgeryExcessiveBleeding: 'fld10050_142290_145917',
	surgeryTime : 'fld10050_142370_145997',
	surgeryTreatment: 'fld10050_142390_146017',
	surgeryTreatedHow: 'fld10050_142410_146037',
	surgeryAddBtn : 'fld10050_142570_146197',
	surgeryDeleteBtn : 'fld10050_142510_146137',
	surgeryTotalScore: 'fld10050_142248_145875'
}

menstrualVariables = {
	menstrualPrimary: 'fld10050_142619_146246',
	menstrualHowLong: 'fld10050_142626_146253',
	menstrualPassClots: 'fld10050_142628_146255',
	menstrualHeaviestDay: 'fld10050_142629_146256',
	menstrualExcessiveBleeding: 'fld10050_142630_146257',
	menstrualHowLongExcessive: 'fld10050_142614_146241',
	menstrualMedicalAttention: 'fld10050_142618_146245',
	menstrualReceiveTreatment: 'fld10050_142615_146242',
	menstrualTreatedHow: 'fld10050_142616_146243',
	menstrualHospitalization: 'fld10050_142613_146240',
	menstrualTimeOffWork: 'fld10050_142611_146238',
	menstrualPictoralScore: 'fld10050_142639_146266',
	menstrualTotalScore: 'fld10050_142633_146260'
}

deliveryVariables = {
	deliveryPrimary: 'fld10050_142647_146274',
	deliveryAddComment: 'fld10050_142649_146276',
	deliveryHeading: 'fld10050_142752_146379',
	deliveryAge: 'fld10050_142652_146279',
	deliveryType: 'fld10050_142722_146349',
	deliveryTreatmentGiven: 'fld10050_142732_146359',
	deliveryTreatmentPrevention: 'fld10050_142742_146369',
	deliveryExcessiveBleeding: 'fld10050_142682_146309',
	deliveryTime: 'fld10050_142692_146319',
	deliveryTreatment: 'fld10050_142662_146289',
	deliveryTreatedHow: 'fld10050_142672_146299',
	deliveryHospital: 'fld10050_142702_146329',
	deliveryAddBtn : 'fld10050_142812_146439',
	deliveryDeleteBtn : 'fld10050_142822_146449',
	deliveryTotalScore: 'fld10050_142650_146277'
}

otherBleedingVariables = {
	otherNeonatalExcessive: 'fld10050_142835_146462',
	otherNeonatalType: 'fld10050_142839_146466',
	otherNeonatalTreatment: 'fld10050_142836_146463',
	otherNeonatalTreatedHow: 'fld10050_142838_146465',
	otherBleedingTotalScore: 'fld10050_142844_146471'
}

cnsVariables = {
	cnsPrimary: 'fld10050_142853_146480',
	cnsAddComment: 'fld10050_142852_146479',
	cnsHeading: 'fld10050_142896_146523',
	cnsAge: 'fld10050_142916_146543',
	cnsTreatment: 'fld10050_142926_146553',
	cnsTreatedHow: 'fld10050_142906_146533',
	cnsAddBtn: 'fld10050_142866_146493',
	cnsDeleteBtn: 'fld10050_142876_146503',
	cnsTotalScore: 'fld10050_142854_146481'
}

hemarthrosisVariables = {
	hemarthrosisPrimary: 'fld10050_142938_146565',
	hemarthrosisAddComment: 'fld10050_142937_146564',
	hemarthrosisHeading: 'fld10050_142942_146569',
	hemarthrosisAge: 'fld10050_142962_146589',
	hemarthrosisType: 'fld10050_143022_146649',
	hemarthrosisTypeOther: 'fld10050_143082_146709',
	hemarthrosisLocation: 'fld10050_143042_146669',
	hemarthrosisTreatment: 'fld10050_142982_146609',
	hemarthrosisTreatedHow: 'fld10050_143002_146629',
	hemarthrosisAddBtn: 'fld10050_143162_146789',
	hemarthrosisDeleteBtn: 'fld10050_143122_146749',
	hemarthrosisTotalScore: 'fld10050_142940_146567'
}

hematomaVariables = {
	hematomaPrimary: 'fld10050_143184_146811',
	hematomaAddComment: 'fld10050_143183_146810',
	hematomaHeading: 'fld10050_143288_146915',
	hematomaAge: 'fld10050_143218_146845',
	hematomaType: 'fld10050_143188_146815',
	hematomaTypeOther: 'fld10050_143228_146855',
	hematomaLocation: 'fld10050_143198_146825',
	hematomaTreatment: 'fld10050_143208_146835',
	hematomaTreatedHow: 'fld10050_143298_146925',
	hematomaAddBtn: 'fld10050_143268_146895',
	hematomaDeleteBtn: 'fld10050_143238_146865',
	hematomaTotalScore: 'fld10050_143186_146813'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_141965_145592',
	totalScoreBottom: 'fld10050_143327_146954'
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
