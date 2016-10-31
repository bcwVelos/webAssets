/**
 * 
 */
var toothExtractionSections = 10;
var surgerySections = 10;
var deliverySections = 10;
var cnsSections = 10;
var hemarthrosisSections = 10;
var hematomaSections = 10;

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
	toothExtractionExcessiveBleeding: 'fld10050_142106_145733',
	toothExtractionTreatment: 'fld10050_142146_145773',
	toothExtractionTreatedHow: 'fld10050_142126_145753',
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
	surgeryExcessiveBleeding: 'fld10050_142290_145917',
	surgeryTreatment: 'fld10050_142390_146017',
	surgeryTreatedHow: 'fld10050_142410_146037',
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
	deliveryTreatment: 'fld10050_142662_146289',
	deliveryTreatedHow: 'fld10050_142672_146299',
	deliveryHospital: 'fld10050_142702_146329',
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
	cnsTreatment: 'fld10050_142926_146553',
	cnsTreatedHow: 'fld10050_142906_146533',
	cnsTotalScore: 'fld10050_142854_146481'
}

hemarthrosisVariables = {
	hemarthrosisPrimary: 'fld10050_142938_146565',
	hemarthrosisBleedingType: 'fld10050_143022_146649',
	hemarthrosisTreatment: 'fld10050_142982_146609',
	hemarthrosisTreatedHow: 'fld10050_143002_146629',
	hemarthrosisTotalScore: 'fld10050_142940_146567'
}

hematomaVariables = {
	hematomaPrimary: 'fld10050_143184_146811',
	hematomaBleedingType: 'fld10050_143188_146815',
	hematomaTreatment: 'fld10050_143208_146835',
	hematomaTreatedHow: 'fld10050_143298_146925',
	hematomaTotalScore: 'fld10050_143186_146813'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_141965_145592',
	totalScoreBottom: 'fld10050_143327_146954'
}

$j(document).ready(function() {
	
	testMapping();
		
	$j('.[class^="calculateBtn"]').click(function(event) {
		calcTotalScore();
	});
});
