var nullScore = true;

function calcScore() {
	calcTotalScore();
	if (formStatus[0].value == '15736')
		testMapping();
}

function calcTotalScore() {
	nullScore = true;
	
	var pcsWorryField = document
	  .getElementsByName(pcsWorryField);
//	var pcsCantGoOn = 'fld10050_128107_133035';
//	var pcsTerrible = 'fld10050_128108_133036';
//	var pcsAwful = 'fld10050_128093_133024';
//	var pcsCantStand = 'fld10050_128109_133037';
//	var pcsAfraid = 'fld10050_128110_133038';
//	var pcsPainfulEvents = 'fld10050_128111_133039';
//	var pcsAnxious = 'fld10050_128112_133040';
//	var pcsOutOfMind = 'fld10050_128113_133041';
//	var pcsHowMuchHurts = 'fld10050_128114_133042';
//	var pcsPainToStop = 'fld10050_128115_133043';
//	var pcsIntensity = 'fld10050_128116_133044';
//	var pcsSerious = 'fld10050_128117_133045';
//	var pcsTotalScore = 'fld10050_128118_133046';
	
	
	var totalScore = 0;
	
	for (var i = 0; i < pcsWorryField.length; i++) {			
		if (pcsWorryField[i].checked) {
			var answer = pcsWorryField[i].value;
			var answerValue = answer.split("|");
			totalScore = totalScore + Number(answerValue[1]);
		}
	}	
	
	var pcsTotalScore = document
		.getElementsByName(pcsTotalScore);
	
	pcsTotalScore[0].value = totalScore;

}

//function testMapping() {
//	document.getElementById(totalScoreVariables.totalScoreTop + "_id").style.color = "red";
//	document.getElementById(totalScoreVariables.totalScoreBottom + "_id").style.color = "red";
//	
//	document.getElementById(noseBleedVariables.epistaxisTotalScore + "_id").style.color = "red";
//	document.getElementById(noseBleedVariables.epistaxisPrimary + "_id").style.color = "red";
//
//	document.getElementById(cutaneousVariables.bruisingTotalScore + "_id").style.color = "red";
//	document.getElementById(cutaneousVariables.bruisingPrimary + "_id").style.color = "red";
//
//	document.getElementById(minorWoundsVariables.minorWoundsTotalScore + "_id").style.color = "red";
//	document.getElementById(minorWoundsVariables.minorWoundsPrimary + "_id").style.color = "red";
//
//	document.getElementById(hematuriaVariables.hematuriaTotalScore + "_id").style.color = "red";
//	document.getElementById(hematuriaVariables.hematuriaPrimary + "_id").style.color = "red";
//
//	document.getElementById(giBleedingVariables.giBleedingTotalScore + "_id").style.color = "red";
//	document.getElementById(giBleedingVariables.giBleedingPrimary + "_id").style.color = "red";
//
//	document.getElementById(oralCavityVariables.oralCavityTotalScore + "_id").style.color = "red";
//	document.getElementById(oralCavityVariables.oralCavityPrimary + "_id").style.color = "red";
//	
//	document.getElementById(toothExtractionVariables.toothExtractionTotalScore + "_id").style.color = "red";
//	document.getElementById(toothExtractionVariables.toothExtractionPrimary + "_id").style.color = "red";
//	
//	document.getElementById(surgeryVariables.surgeryTotalScore + "_id").style.color = "red";
//	document.getElementById(surgeryVariables.surgeryPrimary + "_id").style.color = "red";
//
//	document.getElementById(menstrualVariables.menstrualTotalScore + "_id").style.color = "red";
//	document.getElementById(menstrualVariables.menstrualPrimary + "_id").style.color = "red";
//
//	document.getElementById(deliveryVariables.deliveryTotalScore + "_id").style.color = "red";
//	document.getElementById(deliveryVariables.deliveryPrimary + "_id").style.color = "red";
//
//	document.getElementById(hematomaVariables.hematomaTotalScore + "_id").style.color = "red";
//	document.getElementById(hematomaVariables.hematomaPrimary + "_id").style.color = "red";
//
//	document.getElementById(hemarthrosisVariables.hemarthrosisTotalScore + "_id").style.color = "red";
//	document.getElementById(hemarthrosisVariables.hemarthrosisPrimary + "_id").style.color = "red";
//
//	document.getElementById(cnsVariables.cnsTotalScore + "_id").style.color = "red";
//	document.getElementById(cnsVariables.cnsPrimary + "_id").style.color = "red";
//
//	document.getElementById(otherBleedingVariables.otherBleedingTotalScore + "_id").style.color = "red";
//	document.getElementById(otherBleedingVariables.otherBleedingPrimary + "_id").style.color = "red";
//}
