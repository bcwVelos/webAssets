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
	var lightTouching = document
			.getElementsByName(painDetectVariables.lightTouching);
	var painAttacks = document
			.getElementsByName(painDetectVariables.painAttacks);
	var coldHeat = document
			.getElementsByName(painDetectVariables.coldHeat);
	var numbnessSensation = document
			.getElementsByName(painDetectVariables.numbnessSensation);
	var slightPressure = document
			.getElementsByName(painDetectVariables.slightPressure);
	var courseOfPain = document
			.getElementsByName(painDetectVariables.courseOfPain);
	var painRadiate = document
			.getElementsByName(painDetectVariables.painRadiate);
			
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
	var finalScoreField = document
			.getElementsByName(scoreVariables.finalScore);
	
	//Burning Sensation Question
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
	
	//Tingling Sensation Question
	for (var i = 0; i < tinglingSensation.length; i++) {			
		if (tinglingSensation[i].checked) {
			var answer = tinglingSensation[i].value;
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
	
	//Light Touching Question
	for (var i = 0; i < lightTouching.length; i++) {			
		if (lightTouching[i].checked) {
			var answer = lightTouching[i].value;
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
	
	//Pain Attacks Question
	for (var i = 0; i < painAttacks.length; i++) {			
		if (painAttacks[i].checked) {
			var answer = painAttacks[i].value;
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
	
	//Cold - Hot Water Question
	for (var i = 0; i < coldHeat.length; i++) {			
		if (coldHeat[i].checked) {
			var answer = coldHeat[i].value;
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
	
	//Numbness Sensation Question
	for (var i = 0; i < numbnessSensation.length; i++) {			
		if (numbnessSensation[i].checked) {
			var answer = numbnessSensation[i].value;
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
	
	//Slight Pressure Question
	for (var i = 0; i < slightPressure.length; i++) {			
		if (slightPressure[i].checked) {
			var answer = slightPressure[i].value;
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
	
	var finalScore = totalScore;
	
	//Final Score Calculation
	for (var i = 0; i < courseOfPain.length; i++) {			
		if (courseOfPain[i].checked) {
			var answer = courseOfPain[i].value;
			var answerValue = answer.split("|");
			finalScore = finalScore + Number(answerValue[1]);
		}
	}
	
	for (var i = 0; i < painRadiate.length; i++) {			
		if (painRadiate[i].checked) {
			var answer = painRadiate[i].value;
			var answerValue = answer.split("|");
			finalScore = finalScore + Number(answerValue[1]);
		}
	}
	
	finalScoreField[0].value = finalScore;
}

function testMapping() {
	document.getElementById(painDetectVariables.courseOfPain + "_id").style.color = "red";
	document.getElementById(painDetectVariables.painRadiate + "_id").style.color = "red";
	document.getElementById(painDetectVariables.burningSensation + "_id").style.color = "red";
	document.getElementById(painDetectVariables.tinglingSensation + "_id").style.color = "red";
	document.getElementById(painDetectVariables.lightTouching + "_id").style.color = "red";
	document.getElementById(painDetectVariables.painAttacks + "_id").style.color = "red";
	document.getElementById(painDetectVariables.coldHeat + "_id").style.color = "red";
	document.getElementById(painDetectVariables.numbnessSensation + "_id").style.color = "red";
	document.getElementById(painDetectVariables.slightPressure + "_id").style.color = "red";

	document.getElementById(scoreVariables.hardlyNoticedScore + "_id").style.color = "red";
	document.getElementById(scoreVariables.slightlyScore + "_id").style.color = "red";
	document.getElementById(scoreVariables.moderatelyScore + "_id").style.color = "red";
	document.getElementById(scoreVariables.stronglyScore + "_id").style.color = "red";
	document.getElementById(scoreVariables.veryStronglyScore + "_id").style.color = "red";
	document.getElementById(scoreVariables.totalScore + "_id").style.color = "red";
	document.getElementById(scoreVariables.finalScore + "_id").style.color = "red";
}
