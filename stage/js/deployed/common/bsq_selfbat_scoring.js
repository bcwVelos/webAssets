function calcScore() {
	calcTotalScore();
	if (formStatus[0].value == '15736')
		testMapping();
}

function calcTotalScore() {
	var totalScore = calcNoseBleed();
//					+ calcCutaneous()
//					+ calcMinorWounds()
//					+ calcHematuria()
//					+ calcGIBleeding()
//					+ calcOralCavity()
//					+ calcToothExtraction()
//					+ calcSurgery()
//					+ calcMenstrual()
//					+ calcDelivery()
//					+ calcHematoma()
//					+ calcHemarthrosis()
//					+ calcCNS()
//					+ calcOtherBleeding();

	var totalScoreTop = document
		.getElementsByName(totalScoreVariables.totalScoreTop);
	var totalScoreBottom = document
		.getElementsByName(totalScoreVariables.totalScoreBottom);
	
	totalScoreTop[0].value = totalScore;
	totalScoreBottom[0].value = totalScore;
}

function calcNoseBleed() {
	
	var noseBleedScore = 0;

	var epistaxisTotalScore = document
			.getElementsByName(noseBleedVariables.epistaxisTotalScore);
	var epistaxisPrimary = document
			.getElementsByName(noseBleedVariables.epistaxisPrimary);
	
	//Start scoring
	for (var i = 0; i < epistaxisPrimary.length; i++) {			
		if (epistaxisPrimary[i].checked) {				
			var answer = epistaxisPrimary[i].value;
			var answerValue = answer.split("|");
			if (Number(answerValue[1]) > noseBleedScore)
				noseBleedScore = Number(answerValue[1]);
		}
	}	
	//Nose Bleed Score
	epistaxisTotalScore[0].value = noseBleedScore;	
	return noseBleedScore;
}

function calcCutaneous() {
	
	var bruisingScore = 0;

	var bruisingTotalScore = document
		.getElementsByName(cutaneousVariables.bruisingTotalScore);
	var bruisingPrimary = document
		.getElementsByName(cutaneousVariables.bruisingPrimary);

	//Start scoring
	for (var i=0; i < bruisingPrimary.length; i++) {
		if (bruisingPrimary[i].checked) {
			var answer = (bruisingPrimary[i].value;
			var answerValue = answer.split("|");
			if (Number(answerValue[1]) > bruisingScore)
				bruisingScore = Number(answerValue[1]);
		}
	}	
	//Bruising score
	bruisingTotalScore[0].value= bruisingScore;
	return bruisingScore;
}

function calcMinorWounds() {
	
	var minorWoundsScore = 0;

	var minorWoundsTotalScore = document
		.getElementsByName(minorWoundsVariables.minorWoundsTotalScore);
	var minorWoundsPrimary = document
		.getElementsByName(minorWoundsVariables.minorWoundsPrimary);

	//Start scoring
	for (var i=0; i < minorWoundsPrimary.length; i++) {
		if (minorWoundsPrimary [i].checked) {
			var answer = minorWoundsPrimary [i].value;
			var answerValue = answer.split("|");
			if (Number(answerValue[1]) > minorWoundsScore)
				minorWoundsScore = Number(answerValue[1]);
		}
	}
	//Minor Wounds score
	minorWoundsTotalScore[0].value= minorWoundsScore;
	return minorWoundsScore;
}

function calcHematuria() {
	
	var hematuriaScore = 0;

	var hematuriaTotalScore = document
		.getElementsByName(hematuriaVariables.hematuriaTotalScore);
	var hematuriaPrimary = document
		.getElementsByName(hematuriaVariables.hematuriaPrimary);

	//Start scoring
	for (var i=0; i < hematuriaPrimary.length; i++) {
		if (hematuriaPrimary [i].checked) {
			var answer = hematuriaPrimary [i].value;
			var answerValue = answer.split("|");
			if (Number(answerValue[1]) > hematuriaScore)
				hematuriaScore = Number(answerValue[1]);
		}
	}
	//Hematuria score
	hematuriaTotalScore[0].value= hematuriaScore;
	return hematuriaScore;
}

function calcGIBleeding() {
	
	var giBleedingScore = 0;

	var giBleedingTotalScore = document
		.getElementsByName(giBleedingVariables.giBleedingTotalScore);
	var giBleedingPrimary = document
		.getElementsByName(giBleedingVariables.giBleedingPrimary);

	//Start scoring
	for (var i=0; i < giBleedingPrimary.length; i++) {
		if (giBleedingPrimary [i].checked) {
			var answer = giBleedingPrimary [i].value;
			var answerValue = answer.split("|");
			if (Number(answerValue[1]) > giBleedingScore)
				giBleedingScore = Number(answerValue[1]);
		}
	}
	//GI Bleeding score
	giBleedingTotalScore[0].value= giBleedingScore;
	return giBleedingScore;
}

function calcOralCavity() {
	
	var oralCavityScore = 0;

	var oralCavityTotalScore = document
		.getElementsByName(oralCavityVariables.oralCavityTotalScore);
	var oralCavityPrimary = document
		.getElementsByName(oralCavityVariables.oralCavityPrimary);

	//Start scoring
	for (var i=0; i < oralCavityPrimary.length; i++) {
		if (oralCavityPrimary [i].checked) {
			var answer = oralCavityPrimary [i].value;
			var answerValue = answer.split("|");
			if (Number(answerValue[1]) > oralCavityScore)
				oralCavityScore = Number(answerValue[1]);
		}
	}
	//Oral Cavity score
	oralCavityTotalScore[0].value= oralCavityScore;
	return oralCavityScore;
}

function calcMenstrual() {
	
	var menstrualScore = 0;

	var menstrualTotalScore = document
		.getElementsByName(menstrualVariables.menstrualTotalScore);
	var menstrualPrimary = document
		.getElementsByName(menstrualVariables.menstrualPrimary);

	//Start scoring
	for (var i=0; i < menstrualPrimary.length; i++) {
		if (menstrualPrimary [i].checked) {
			var answer = menstrualPrimary [i].value;
			var answerValue = answer.split("|");
			if (Number(answerValue[1]) > menstrualScore)
				menstrualScore = Number(answerValue[1]);
		}
	}
	//Female Menstrual History score
	menstrualTotalScore[0].value= menstrualScore;
	return menstrualScore;
}

function calcDelivery() {
	
	var deliveryScore = 0;

	var deliveryTotalScore = document
		.getElementsByName(deliveryVariables.deliveryTotalScore);
	var deliveryPrimary = document
		.getElementsByName(deliveryVariables.deliveryPrimary);
	
	//Start Scoring
	for (var i=0; i < deliveryPrimary.length; i++) {
		if (deliveryPrimary [i].checked) {
			var answer = deliveryPrimary [i].value;
			var answerValue = answer.split("|");
			if (Number(answerValue[1]) > deliveryScore)
				deliveryScore = Number(answerValue[1]);
		}
	}
	//Deliveries score
	deliveryTotalScore[0].value= deliveryScore;
	return deliveryScore;
}

function calcHematoma() {
	
	var hematomaScore = 0;

	var hematomaTotalScore = document
		.getElementsByName(hematomaVariables.hematomaTotalScore);
	var hematomaPrimary = document
		.getElementsByName(hematomaVariables.hematomaPrimary);
	
	//Start scoring
	for (var i=0; i < hematomaPrimary.length; i++) {
		if (hematomaPrimary [i].checked) {
			var answer = hematomaPrimary [i].value;
			var answerValue = answer.split("|");
			if (Number(answerValue[1]) > hematomaScore)
				hematomaScore = Number(answerValue[1]);
		}
	}	
	//hematoma score
	hematomaTotalScore[0].value= hematomaScore;
	return hematomaScore;
}

function calcHemarthrosis() {
	
	var hemarthrosisScore = 0;

	var hemarthrosisTotalScore = document
		.getElementsByName(hemarthrosisVariables.hemarthrosisTotalScore);
	var hemarthrosisPrimary = document
		.getElementsByName(hemarthrosisVariables.hemarthrosisPrimary);
		
	//Start scoring
	for (var i=0; i < hemarthrosisPrimary.length; i++) {
		if (hemarthrosisPrimary [i].checked) {
			var answer = hemarthrosisPrimary [i].value;
			var answerValue = answer.split("|");
			if (Number(answerValue[1]) > hemarthrosisScore)
				hemarthrosisScore = Number(answerValue[1]);
		}
	}		
	//Hemarthrosis score
	hemarthrosisTotalScore[0].value= hemarthrosisScore;
	return hemarthrosisScore;
}

function calcCNS() {
	
	var cnsScore = 0;

	var cnsTotalScore = document
		.getElementsByName(cnsVariables.cnsTotalScore);
	var cnsPrimary = document
		.getElementsByName(cnsVariables.cnsPrimary);
	
	//Start scoring
	for (var i=0; i < cnsPrimary.length; i++) {
		if (cnsPrimary [i].checked) {
			var answer = cnsPrimary [i].value;
			var answerValue = answer.split("|");
			if (Number(answerValue[1]) > cnsScore)
				cnsScore = Number(answerValue[1]);
		}
	}	
	//CNS Bleeding score
	cnsTotalScore[0].value= cnsScore;
	return cnsScore;
}

function calcOtherBleeding() {
	
	var otherBleedingScore = 0;

	var otherBleedingTotalScore = document
		.getElementsByName(otherBleedingVariables.otherBleedingTotalScore);
	var otherBleedingPrimary = document
		.getElementsByName(otherBleedingVariables.otherBleedingPrimary);

	//Start scoring
	for (var i=0; i < otherBleedingPrimary.length; i++) {
		if (otherBleedingPrimary [i].checked) {
			var answer = otherBleedingPrimary [i].value;
			var answerValue = answer.split("|");
			if (Number(answerValue[1]) > otherBleedingScore)
				otherBleedingScore = Number(answerValue[1]);
		}
	}
	//Other Bleeding Section score
	otherBleedingTotalScore[0].value= otherBleedingScore;
	return otherBleedingScore;
}

function calcToothExtraction() {
	
	var toothExtractionScore = 0;

	var toothExtractionTotalScore = document
		.getElementsByName(toothExtractionVariables.toothExtractionTotalScore);
	var toothExtractionPrimary = document
		.getElementsByName(toothExtractionVariables.toothExtractionPrimary);
	
	//Start Scoring
	for (var i=0; i < toothExtractionPrimary.length; i++) {
		if (toothExtractionPrimary [i].checked) {
			var answer = toothExtractionPrimary [i].value;
			var answerValue = answer.split("|");
			if (Number(answerValue[1]) > toothExtractionScore)
				toothExtractionScore = Number(answerValue[1]);
		}
	}
	//Tooth Extraction score
	toothExtractionTotalScore[0].value= toothExtractionScore;
	return toothExtractionScore;
}

function calcSurgery() {
	
	var surgeryScore = 0;
	
	var surgeryTotalScore = document
		.getElementsByName(surgeryVariables.surgeryTotalScore);
	var surgeryPrimary = document
		.getElementsByName(surgeryVariables.surgeryPrimary);
	
	//Start Scoring
	for (var i=0; i < surgeryPrimary.length; i++) {
		if (surgeryPrimary [i].checked) {
			var answer = surgeryPrimary [i].value;
			var answerValue = answer.split("|");
			if (Number(answerValue[1]) > surgeryScore)
				surgeryScore = Number(answerValue[1]);
		}
	}	
	//Surgery score
	surgeryTotalScore[0].value= surgeryScore;
	return surgeryScore;
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
