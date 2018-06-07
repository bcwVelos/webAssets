function calcScore() {
	calcTotalScore();
	//if (formStatus[0].value == '15736')
		//testMapping();
}

function calcTotalScore() {
	var totalScore = 0;
	var hardlyNoticedCount = 0;
	var slightlyCount = 0;
	var moderatelyCount = 0;
	var stronglyCount = 0;
	var veryStronglyCount = 0;
	
	var burningSensation = document
			.getElementsByName(painDetectVariables.burningSensation);
	var tinglingSensation = document
			.getElementsByName(painDetectVariables.tinglingSensation);
	var totalScoreField = document
			.getElementsByName(scoreVariables.totalScore);
	var hardlyNoticedField = document
			.getElementsByName(scoreVariables.hardlyNoticedScore);
	var slightlyField = document
			.getElementsByName(scoreVariables.slightlyScore);
	var moderatelyField = document
			.getElementsByName(scoreVariables.moderatelyScore);
	var stronglyField = document
			.getElementsByName(scoreVariables.stronglyScore);
	var veryStronglyField = document
			.getElementsByName(scoreVariables.veryStronglyScore);
		
	for (var i = 0; i < burningSensation.length; i++) {			
		if (burningSensation[i].checked) {
			var answer = burningSensation[i].value;
			var answerValue = answer.split("|");
			totalScore = totalScore + Number(answerValue[1]);
			if (Number(answerValue[1]) == 1)
				hardlyNoticedCount = hardlyNoticedCount + 1;
			else if (Number(answerValue[1]) == 2)
				slightlyCount = slightlyCount + 1;
			else if (Number(answerValue[1]) == 3)
				moderatelyCount = moderatelyCount + 1;
			else if (Number(answerValue[1]) == 4)
				stronglyCount = stronglyCount + 1;
			else if (Number(answerValue[1]) == 5)
				veryStronglyCount = veryStronglyCount + 1;
		}
	}
	
	for (var i = 0; i < burningSensation.length; i++) {			
		if (burningSensation[i].checked) {
			var answer = burningSensation[i].value;
			var answerValue = answer.split("|");
			totalScore = totalScore + Number(answerValue[1]);
			if (Number(answerValue[1]) == 1)
				hardlyNoticedCount = hardlyNoticedCount + 1;
			else if (Number(answerValue[1]) == 2)
				slightlyCount = slightlyCount + 1;
			else if (Number(answerValue[1]) == 3)
				moderatelyCount = moderatelyCount + 1;
			else if (Number(answerValue[1]) == 4)
				stronglyCount = stronglyCount + 1;
			else if (Number(answerValue[1]) == 5)
				veryStronglyCount = veryStronglyCount + 1;
		}
	}
	
	hardlyNoticedField[0].value = hardlyNoticedCount;
	slightlyField[0].value = slightlyCount;
	moderatelyField[0].value = moderatelyCount;
	stronglyField[0].value = stronglyCount;
	veryStronglyField[0].value = veryStronglyCount;
	totalScoreField[0].value = totalScore;
}

function calcEpistaxis() {
	
	var noseBleedScore = 0;
	var x = false;

	var epistaxisTotalScore = document
			.getElementsByName(noseBleedVariables.epistaxisTotalScore);
	var epistaxisPrimary = document
			.getElementsByName(noseBleedVariables.epistaxisPrimary);
	
	//Start scoring
	for (var i = 0; i < epistaxisPrimary.length; i++) {			
		if (epistaxisPrimary[i].checked) {		
			x = true; nullScore =  false;
			var answer = epistaxisPrimary[i].value;
			var answerValue = answer.split("|");
			if (Number(answerValue[1]) > noseBleedScore)
				noseBleedScore = Number(answerValue[1]);
		}
	}	
	//Nose Bleed Score
	if (x == true)
		epistaxisTotalScore[0].value = noseBleedScore;
	else
		epistaxisTotalScore[0].value = "";
	
	return noseBleedScore;
}

function testMapping() {
	document.getElementById(totalScoreVariables.totalScoreTop + "_id").style.color = "red";
	document.getElementById(totalScoreVariables.totalScoreBottom + "_id").style.color = "red";
	
	document.getElementById(noseBleedVariables.epistaxisTotalScore + "_id").style.color = "red";
	document.getElementById(noseBleedVariables.epistaxisPrimary + "_id").style.color = "red";

	document.getElementById(cutaneousVariables.bruisingTotalScore + "_id").style.color = "red";
	document.getElementById(cutaneousVariables.bruisingPrimary + "_id").style.color = "red";

	document.getElementById(minorWoundsVariables.minorWoundsTotalScore + "_id").style.color = "red";
	document.getElementById(minorWoundsVariables.minorWoundsPrimary + "_id").style.color = "red";

	document.getElementById(hematuriaVariables.hematuriaTotalScore + "_id").style.color = "red";
	document.getElementById(hematuriaVariables.hematuriaPrimary + "_id").style.color = "red";

	document.getElementById(giBleedingVariables.giBleedingTotalScore + "_id").style.color = "red";
	document.getElementById(giBleedingVariables.giBleedingPrimary + "_id").style.color = "red";

	document.getElementById(oralCavityVariables.oralCavityTotalScore + "_id").style.color = "red";
	document.getElementById(oralCavityVariables.oralCavityPrimary + "_id").style.color = "red";
	
	document.getElementById(toothExtractionVariables.toothExtractionTotalScore + "_id").style.color = "red";
	document.getElementById(toothExtractionVariables.toothExtractionPrimary + "_id").style.color = "red";
	
	document.getElementById(surgeryVariables.surgeryTotalScore + "_id").style.color = "red";
	document.getElementById(surgeryVariables.surgeryPrimary + "_id").style.color = "red";

	document.getElementById(menstrualVariables.menstrualTotalScore + "_id").style.color = "red";
	document.getElementById(menstrualVariables.menstrualPrimary + "_id").style.color = "red";

	document.getElementById(deliveryVariables.deliveryTotalScore + "_id").style.color = "red";
	document.getElementById(deliveryVariables.deliveryPrimary + "_id").style.color = "red";

	document.getElementById(hematomaVariables.hematomaTotalScore + "_id").style.color = "red";
	document.getElementById(hematomaVariables.hematomaPrimary + "_id").style.color = "red";

	document.getElementById(hemarthrosisVariables.hemarthrosisTotalScore + "_id").style.color = "red";
	document.getElementById(hemarthrosisVariables.hemarthrosisPrimary + "_id").style.color = "red";

	document.getElementById(cnsVariables.cnsTotalScore + "_id").style.color = "red";
	document.getElementById(cnsVariables.cnsPrimary + "_id").style.color = "red";

	document.getElementById(otherBleedingVariables.otherBleedingTotalScore + "_id").style.color = "red";
	document.getElementById(otherBleedingVariables.otherBleedingPrimary + "_id").style.color = "red";
}
