var nullScore = true;

function calcScore() {
	calcTotalScore();
	if (formStatus[0].value == '15736')
		testMapping();
}

function calcTotalScore() {

	var pcsWorry = document
	  .getElementsByName(pcsVariables.pcsWorry);
	var pcsCantGoOn = document
	  .getElementsByName(pcsVariables.pcsCantGoOn);
	var pcsTerrible = document
	  .getElementsByName(pcsVariables.pcsTerrible);
	var pcsAwful = document
	  .getElementsByName(pcsVariables.pcsAwful);
	var pcsCantStand = document
	  .getElementsByName(pcsVariables.pcsCantStand);
	var pcsAfraid = document
	  .getElementsByName(pcsVariables.pcsAfraid);
	var pcsPainfulEvents = document
	  .getElementsByName(pcsVariables.pcsPainfulEvents);
	var pcsAnxious = document
	  .getElementsByName(pcsVariables.pcsAnxious);
	var pcsOutOfMind = document
	  .getElementsByName(pcsVariables.pcsOutOfMind);
	var pcsHowMuchHurts = document
	  .getElementsByName(pcsVariables.pcsHowMuchHurts);
	var pcsPainToStop = document
	  .getElementsByName(pcsVariables.pcsPainToStop);
	var pcsIntensity = document
	  .getElementsByName(pcsVariables.pcsIntensity);
	var pcsSerious = document
	  .getElementsByName(pcsVariables.pcsSerious);
	
	var totalScore = 0;
	
	for (var i = 0; i < pcsWorry.length; i++) {			
		if (pcsWorry[i].checked) {
			var answer = pcsWorry[i].value;
			var answerValue = answer.split("|");
			totalScore = totalScore + Number(answerValue[1]);
		}
	}
	
	for (var i = 0; i < pcsCantGoOn.length; i++) {			
		if (pcsCantGoOn[i].checked) {
			var answer = pcsCantGoOn[i].value;
			var answerValue = answer.split("|");
			totalScore = totalScore + Number(answerValue[1]);
		}
	}
	
	for (var i = 0; i < pcsTerrible.length; i++) {			
		if (pcsTerrible[i].checked) {
			var answer = pcsTerrible[i].value;
			var answerValue = answer.split("|");
			totalScore = totalScore + Number(answerValue[1]);
		}
	}
	
	for (var i = 0; i < pcsAwful.length; i++) {			
		if (pcsAwful[i].checked) {
			var answer = pcsAwful[i].value;
			var answerValue = answer.split("|");
			totalScore = totalScore + Number(answerValue[1]);
		}
	}
	
	for (var i = 0; i < pcsCantStand.length; i++) {			
		if (pcsCantStand[i].checked) {
			var answer = pcsCantStand[i].value;
			var answerValue = answer.split("|");
			totalScore = totalScore + Number(answerValue[1]);
		}
	}
	
	for (var i = 0; i < pcsAfraid.length; i++) {			
		if (pcsAfraid[i].checked) {
			var answer = pcsAfraid[i].value;
			var answerValue = answer.split("|");
			totalScore = totalScore + Number(answerValue[1]);
		}
	}
	
	for (var i = 0; i < pcsPainfulEvents.length; i++) {			
		if (pcsPainfulEvents[i].checked) {
			var answer = pcsPainfulEvents[i].value;
			var answerValue = answer.split("|");
			totalScore = totalScore + Number(answerValue[1]);
		}
	}
	
	for (var i = 0; i < pcsAnxious.length; i++) {			
		if (pcsAnxious[i].checked) {
			var answer = pcsAnxious[i].value;
			var answerValue = answer.split("|");
			totalScore = totalScore + Number(answerValue[1]);
		}
	}
	
	for (var i = 0; i < pcsOutOfMind.length; i++) {			
		if (pcsOutOfMind[i].checked) {
			var answer = pcsOutOfMind[i].value;
			var answerValue = answer.split("|");
			totalScore = totalScore + Number(answerValue[1]);
		}
	}
	
	for (var i = 0; i < pcsHowMuchHurts.length; i++) {			
		if (pcsHowMuchHurts[i].checked) {
			var answer = pcsHowMuchHurts[i].value;
			var answerValue = answer.split("|");
			totalScore = totalScore + Number(answerValue[1]);
		}
	}
	
	for (var i = 0; i < pcsPainToStop.length; i++) {			
		if (pcsPainToStop[i].checked) {
			var answer = pcsPainToStop[i].value;
			var answerValue = answer.split("|");
			totalScore = totalScore + Number(answerValue[1]);
		}
	}
	
	for (var i = 0; i < pcsIntensity.length; i++) {			
		if (pcsIntensity[i].checked) {
			var answer = pcsIntensity[i].value;
			var answerValue = answer.split("|");
			totalScore = totalScore + Number(answerValue[1]);
		}
	}
	
	for (var i = 0; i < pcsSerious.length; i++) {			
		if (pcsSerious[i].checked) {
			var answer = pcsSerious[i].value;
			var answerValue = answer.split("|");
			totalScore = totalScore + Number(answerValue[1]);
		}
	}
	
	var pcsTotalScore = document
		.getElementsByName(pcsVariables.pcsTotalScore);
	
	pcsTotalScore[0].value = totalScore;

}

function testMapping() {
	document.getElementById(pcsVariables.pcsWorry + "_id").style.color = "red";
	
	document.getElementById(pcsVariables.pcsCantGoOn + "_id").style.color = "red";

	document.getElementById(pcsVariables.pcsTerrible + "_id").style.color = "red";

	document.getElementById(pcsVariables.pcsAwful + "_id").style.color = "red";

	document.getElementById(pcsVariables.pcsCantStand + "_id").style.color = "red";

	document.getElementById(pcsVariables.pcsAfraid + "_id").style.color = "red";

	document.getElementById(pcsVariables.pcsPainfulEvents + "_id").style.color = "red";
	
	document.getElementById(pcsVariables.pcsAnxious + "_id").style.color = "red";
	
	document.getElementById(pcsVariables.pcsOutOfMind + "_id").style.color = "red";

	document.getElementById(pcsVariables.pcsHowMuchHurts + "_id").style.color = "red";

	document.getElementById(pcsVariables.pcsPainToStop + "_id").style.color = "red";

	document.getElementById(pcsVariables.pcsIntensity + "_id").style.color = "red";

	document.getElementById(pcsVariables.pcsSerious + "_id").style.color = "red";

	document.getElementById(pcsVariables.pcsTotalScore + "_id").style.color = "red";
}
