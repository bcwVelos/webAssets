function calcNoseBleed() {

	//alert("Calculate nose Bleed!");
	var noseBleedScore = 0;

	var epistaxisPrimary = document
			.getElementsByName(noseBleedVariables.epistaxisPrimary);
	var epistaxisHowMany = document
			.getElementsByName(noseBleedVariables.epistaxisHowMany);
	var epistaxisHowLong = document
			.getElementsByName(noseBleedVariables.epistaxisHowLong);
	var epistaxisSeekMedAttn = document
			.getElementsByName(noseBleedVariables.epistaxisSeekMedAttn);
	var epistaxisTreatedHow = document
			.getElementsByName(noseBleedVariables.epistaxisTreatedHow);
	var epistaxisTotalScore = document
			.getElementsByName(noseBleedVariables.epistaxisTotalScore);
	
		if (epistaxisPrimary[0].checked) {

		for (var i = 0; i < epistaxisHowMany.length; i++) {
			
			if (epistaxisHowMany[i].checked) {
				
				var answer = epistaxisHowMany[i].value;
				var answerValue = answer.split("|");
				if (Number(answerValue[1]) > noseBleedScore)
					noseBleedScore = Number(answerValue[1]);
			}
		}

		for (var i = 0; i < epistaxisHowLong.length; i++) {

			if (epistaxisHowLong[i].checked) {

				var answer = epistaxisHowLong[i].value;
				var answerValue = answer.split("|");
				if (Number(answerValue[1]) > noseBleedScore)
					noseBleedScore = Number(answerValue[1]);
			}
		}

		if (epistaxisSeekMedAttn[0].checked) {

			for (var i = 0; i < epistaxisTreatedHow.length; i++) {
				
				if (epistaxisTreatedHow[i].checked) {
					
					var answer = epistaxisTreatedHow[i].value;
					var answerValue = answer.split("|");
					if (Number(answerValue[1]) > noseBleedScore)
						noseBleedScore = Number(answerValue[1]);
				}
			}
		}

	} else {
		noseBleedScore = 0;
	}
	//alert("Nose Bleed Score = " + noseBleedScore);
	epistaxisTotalScore[0].value = noseBleedScore;
	
	return noseBleedScore;

}

function calcCutaneous() {
	
	var bruisingScore = 0;
	
	var bruisingPrimary = document
		.getElementsByName(cutaneousVariables.bruisingPrimary);
	var bruisingTrauma = document
		.getElementsByName(cutaneousVariables.bruisingTrauma);
	var bruisingMedicalAttention = document
		.getElementsByName(cutaneousVariables.bruisingMedicalAttention);
	var bruisingTreatedHow = document
		.getElementsByName(cutaneousVariables.bruisingTreatedHow);
	var bruisingMultiple = document
		.getElementsByName(cutaneousVariables.bruisingMultiple);
	var bruisingTotalScore = document
		.getElementsByName(cutaneousVariables.bruisingTotalScore);

	if (bruisingPrimary[0].checked) {
		for (var i=0; i<bruisingTrauma.length; i++) {

			if (bruisingTrauma[i].checked) {
				var answer = bruisingTrauma[i].value;
				var answerValue = answer.split("|");
				if (Number(answerValue[1]) > bruisingScore)
					bruisingScore = Number(answerValue[1]);
			}
		}

	  
		for (var i=0; i<bruisingMedicalAttention.length; i++) {

			if (bruisingMedicalAttention[i].checked) {
				var answer = bruisingMedicalAttention[i].value;
				var answerValue = answer.split("|");	
				if (Number(answerValue[1]) > bruisingScore)
					bruisingScore = Number(answerValue[1]);
			}
		}
		
		if (bruisingMedicalAttention[0].checked) {
			for (var i=0; i<bruisingTreatedHow.length; i++) {

				if (bruisingTreatedHow[i].checked) {
					var answer = bruisingTreatedHow[i].value;
					var answerValue = answer.split("|");
					if (Number(answerValue[1]) > bruisingScore)
						bruisingScore = Number(answerValue[1]);
				}
			}
		}
		
		for (var i=0; i<bruisingMultiple.length; i++) {

			if (bruisingMultiple[i].checked) {
				var answer = bruisingMultiple[i].value;
				var answerValue = answer.split("|");
				if (Number(answerValue[1]) > bruisingScore)
					bruisingScore = Number(answerValue[1]);
			}
		}
	}	
	//Bruising score
	bruisingTotalScore[0].value= bruisingScore;
	return bruisingScore;
}

function calcMinorWounds() {
	
	var minorWoundsScore = 0;
	
	var minorWoundsPrimary = document
		.getElementsByName(minorWoundsVariables.minorWoundsPrimary);
	var minorWoundsHowMany = document
		.getElementsByName(minorWoundsVariables.minorWoundsHowMany);
	var minorWoundsHowLong = document
		.getElementsByName(minorWoundsVariables.minorWoundsHowLong);
	var minorWoundsSeekMedAttn = document
		.getElementsByName(minorWoundsVariables.minorWoundsSeekMedAttn);
	var minorWoundsTreatedHow = document
		.getElementsByName(minorWoundsVariables.minorWoundsTreatedHow);
	var minorWoundsTotalScore = document
		.getElementsByName(minorWoundsVariables.minorWoundsTotalScore);

	if (minorWoundsPrimary[0].checked) {
		for (var i=0; i<minorWoundsHowMany.length; i++) {

			if (minorWoundsHowMany[i].checked) {
				var answer = minorWoundsHowMany[i].value;
				var answerValue = answer.split("|");	
				if (Number(answerValue[1]) > minorWoundsScore)
					minorWoundsScore = Number(answerValue[1]);
			}
		}

	  
		for (var i=0; i<minorWoundsHowLong.length; i++) {

			if (minorWoundsHowLong[i].checked) {
				var answer = minorWoundsHowLong[i].value;
				var answerValue = answer.split("|");	
				if (Number(answerValue[1]) > minorWoundsScore)
				minorWoundsScore = Number(answerValue[1]);
			}
		}

		if (minorWoundsSeekMedAttn[0].checked) {
			for (var i=0; i<minorWoundsTreatedHow.length; i++) {

				if (minorWoundsTreatedHow[i].checked) {
					var answer = minorWoundsTreatedHow[i].value;
					var answerValue = answer.split("|");
					if (Number(answerValue[1]) > minorWoundsScore)
						minorWoundsScore = Number(answerValue[1]);
				}
			}
		}
	}
	//Minor Wounds score
	minorWoundsTotalScore[0].value= minorWoundsScore;
	return minorWoundsScore;
}

function calcOralCavity() {
	
	var oralCavityScore = 0;
	
	var oralCavityPrimary = document
		.getElementsByName(oralCavityVariables.oralCavityPrimary);
	var oralCavitySeekMedAttn = document
		.getElementsByName(oralCavityVariables.oralCavitySeekMedAttn);
	var oralCavityTreatedHow = document
		.getElementsByName(oralCavityVariables.oralCavityTreatedHow);
	var oralCavityTotalScore = document
		.getElementsByName(oralCavityVariables.oralCavityTotalScore);

	if (oralCavityPrimary[0].checked) {
		for (var i=0; i<oralCavityPrimary.length; i++) {

			if (oralCavityPrimary[i].checked) {
				var answer = oralCavityPrimary[i].value;
				var answerValue = answer.split("|");
				if (Number(answerValue[1]) > oralCavityScore)
					oralCavityScore = Number(answerValue[1]);
			}
		}
		
		if (oralCavitySeekMedAttn[0].checked) {
			for (var i=0; i<oralCavityTreatedHow.length; i++) {

				if (oralCavityTreatedHow[i].checked) {
					var answer = oralCavityTreatedHow[i].value;
					var answerValue = answer.split("|");
					if (Number(answerValue[1]) > oralCavityScore)
						oralCavityScore = Number(answerValue[1]);
				}
			}
		}
	}
	//Oral Cavity score
	oralCavityTotalScore[0].value= oralCavityScore;
	return oralCavityScore;
}

function calcGIBleeding() {
	
	var giBleedingScore = 0;
	
	var giBleedingPrimary = document
		.getElementsByName(giBleedingVariables.giBleedingPrimary);
	var giBleedingOtherIllness = document
		.getElementsByName(giBleedingVariables.giBleedingOtherIllness);
	var giBleedingSeekMedAttn = document
		.getElementsByName(giBleedingVariables.giBleedingSeekMedAttn);
	var giBleedingTreatedHow = document
		.getElementsByName(giBleedingVariables.giBleedingTreatedHow);
	var giBleedingTotalScore = document
		.getElementsByName(giBleedingVariables.giBleedingTotalScore);

	if (giBleedingPrimary[0].checked) {
		for (var i=0; i<giBleedingOtherIllness.length; i++) {

			if (giBleedingOtherIllness[i].checked) {
				var answer = giBleedingOtherIllness[i].value;
				var answerValue = answer.split("|");	
				if (Number(answerValue[1]) > giBleedingScore)
					giBleedingScore = Number(answerValue[1]);
			}
		}

		if (giBleedingSeekMedAttn[0].checked) {
			for (var i=0; i<giBleedingTreatedHow.length; i++) {

				if (giBleedingTreatedHow[i].checked) {
					var answer = giBleedingTreatedHow[i].value;
					var answerValue = answer.split("|");
					if (Number(answerValue[1]) > giBleedingScore)
						giBleedingScore = Number(answerValue[1]);
				}
			}
		}
	}
	//GI Bleeding score
	giBleedingTotalScore[0].value= giBleedingScore;
	return giBleedingScore;
}

function calcHematuria() {
	
	var hematuriaScore = 0;
	
	var hematuriaPrimary = document
		.getElementsByName(hematuriaVariables.hematuriaPrimary);
	var hematuriaSeekMedAttn = document
		.getElementsByName(hematuriaVariables.hematuriaSeekMedAttn);
	var hematuriaTreatedHow = document
		.getElementsByName(hematuriaVariables.hematuriaTreatedHow);
	var hematuriaTotalScore = document
		.getElementsByName(hematuriaVariables.hematuriaTotalScore);

	if (hematuriaPrimary[0].checked) {
		for (var i=0; i<hematuriaPrimary.length; i++) {

			if (hematuriaPrimary[i].checked) {
				var answer = hematuriaPrimary[i].value;
				var answerValue = answer.split("|");	
				if (Number(answerValue[1]) > hematuriaScore)
					hematuriaScore = Number(answerValue[1]);
			}
		}

		if (hematuriaSeekMedAttn[0].checked) {
			for (var i=0; i<hematuriaTreatedHow.length; i++) {

				if (hematuriaTreatedHow[i].checked) {
					var answer = hematuriaTreatedHow[i].value;
					var answerValue = answer.split("|");
					if (Number(answerValue[1]) > hematuriaScore)
						hematuriaScore = Number(answerValue[1]);
				}
			}
		}
	}
	//Hematuria score
	hematuriaTotalScore[0].value= hematuriaScore;
	return hematuriaScore;
}

function calcMenstrual() {
	
	var menstrualScore = 0;
	
	var menstrualPrimary = document
		.getElementsByName(menstrualVariables.menstrualPrimary);
	var menstrualHowLong = document
		.getElementsByName(menstrualVariables.menstrualHowLong);
	var menstrualPassClots = document
		.getElementsByName(menstrualVariables.menstrualPassClots);
	var menstrualHeaviestDay = document
		.getElementsByName(menstrualVariables.menstrualHeaviestDay);
	var menstrualExcessiveBleeding = document
		.getElementsByName(menstrualVariables.menstrualExcessiveBleeding);
	var menstrualHowLongExcessive = document
		.getElementsByName(menstrualVariables.menstrualHowLongExcessive);
	var menstrualMedicalAttention = document
		.getElementsByName(menstrualVariables.menstrualMedicalAttention);
	var menstrualReceiveTreatment = document
		.getElementsByName(menstrualVariables.menstrualReceiveTreatment);
	var menstrualTreatedHow = document
		.getElementsByName(menstrualVariables.menstrualTreatedHow);
	var menstrualHospitalization = document
		.getElementsByName(menstrualVariables.menstrualHospitalization);
	var menstrualTimeOffWork = document
		.getElementsByName(menstrualVariables.menstrualTimeOffWork);
	var menstrualPictoralScore = document
		.getElementsByName(menstrualVariables.menstrualPictoralScore);
	var menstrualTotalScore = document
		.getElementsByName(menstrualVariables.menstrualTotalScore);

	if (menstrualPrimary[0].checked) {
		var menstrualHowLongValue = menstrualHowLong[0].value;
		if (menstrualHowLongValue.includes('-')) {
				var menstrualElements = menstrualHowLongValue.split("-");
				menstrualHowLongValue = (menstrualElements[0]+menstrualElements[1])/2;
		}
		if (isNaN(menstrualHowLongValue)) {
			alert ("Menorrhagia Section:  Please enter a number or number range separated by a hypen (w/no spaces)" +
					" in the How long does your average menstrual period last (days)? field.")
		}
		
		if (menstrualHowLongValue > 7)
			menstrualScore = menstrualScore + 1;
	
	
		for (var i=0; i<menstrualPassClots.length; i++) {

			if (menstrualPassClots[i].checked) {
				var answer = menstrualPassClots[i].value;
				var answerValue = answer.split("|");	
				if (Number(answerValue[1]) > menstrualScore)
					menstrualScore = Number(answerValue[1]);
			}
		}
	
		for (var i=0; i<menstrualHeaviestDay.length; i++) {

			if (menstrualHeaviestDay[i].checked) {
				var answer = menstrualHeaviestDay[i].value;
				var answerValue = answer.split("|");	
				if (Number(answerValue[1]) > menstrualScore)
					menstrualScore = Number(answerValue[1]);
			}
		}
	
		if (menstrualExcessiveBleeding[0].checked) {
			for (var i=0; i<menstrualHowLongExcessive.length; i++) {

				if (menstrualHowLongExcessive[i].checked) {
					var answer = menstrualHowLongExcessive[i].value;
					var answerValue = answer.split("|");	
					if (Number(answerValue[1]) > menstrualScore)
						menstrualScore = Number(answerValue[1]);
				}
			}
	
			for (var i=0; i<menstrualMedicalAttention.length; i++) {

				if (menstrualMedicalAttention[i].checked) {
					var answer = menstrualMedicalAttention[i].value;
					var answerValue = answer.split("|");	
					if (Number(answerValue[1]) > menstrualScore)
						menstrualScore = Number(answerValue[1]);
				}
			}
	
			if (menstrualMedicalAttention[0].checked && menstrualReceiveTreatment[0].checked) {
				for (var i=0; i<menstrualTreatedHow.length; i++) {

					if (menstrualTreatedHow[i].checked) {
						var answer = menstrualTreatedHow[i].value;
						var answerValue = answer.split("|");
						if (Number(answerValue[1]) > menstrualScore)
							menstrualScore = Number(answerValue[1]);
					}
				}
			}
		}
	
		for (var i=0; i<menstrualHospitalization.length; i++) {

			if (menstrualHospitalization[i].checked) {
				var answer = menstrualHospitalization[i].value;
				var answerValue = answer.split("|");
				if (Number(answerValue[1]) > menstrualScore)
					menstrualScore = Number(answerValue[1]);
			}
		}
	
		for (var i=0; i<menstrualTimeOffWork.length; i++) {

			if (menstrualTimeOffWork[i].checked) {
				var answer = menstrualTimeOffWork[i].value;
				var answerValue = answer.split("|");
				if (Number(answerValue[1]) > menstrualScore)
					menstrualScore = Number(answerValue[1]);
			}
		}
		
		menstrualPictoralScoreValue = menstrualPictoralScore[0].value
		if (isNaN(menstrualPictoralScoreValue))
			alert ("Menorrhagia Section:  Please enter a number )" +
			" in the Pictoral Bleeding Score Assessment field.")
		if (menstrualPictoralScoreValue > 100)
			if (menstrualScore < 1)
				menstrualScore = 1;
	}
	
	//Female Menstrual History score
	menstrualTotalScore[0].value= menstrualScore;
	return menstrualScore;
}

function calcOtherBleeding() {
	
	var otherBleedingScore = 0;
	
	var otherNeonatalExcessive = document
		.getElementsByName(otherBleedingVariables.otherNeonatalExcessive);
	var otherNeonatalType = document
		.getElementsByName(otherBleedingVariables.otherNeonatalType);
	var otherNeonatalTreatment = document
		.getElementsByName(otherBleedingVariables.otherNeonatalTreatment);
	var otherNeonatalTreatedHow = document
		.getElementsByName(otherBleedingVariables.otherNeonatalTreatedHow);
	var otherBleedingTotalScore = document
		.getElementsByName(otherBleedingVariables.otherBleedingTotalScore);

	if (otherNeonatalExcessive[0].checked) {
		for (var i=0; i<otherNeonatalType.length; i++) {

			if (otherNeonatalType[i].checked) {
				var answer = otherNeonatalType[i].value;
				var answerValue = answer.split("|");	
				if (Number(answerValue[1]) > otherBleedingScore)
					otherBleedingScore = Number(answerValue[1]);
			}
		}

		if (otherNeonatalTreatment[0].checked) {
			for (var i=0; i<otherNeonatalTreatedHow.length; i++) {

				if (otherNeonatalTreatedHow[i].checked) {
					var answer = otherNeonatalTreatedHow[i].value;
					var answerValue = answer.split("|");			
					if (Number(answerValue[1]) > otherBleedingScore)
						otherBleedingScore = Number(answerValue[1]);
				}
			}
		}
	}

	//Other Bleeding Section score
	otherBleedingTotalScore[0].value= otherBleedingScore;
	return otherBleedingScore;
}

function calcToothExtraction() {
	
	var toothNoOfTimesExcessive = 0;
	var toothExtractionScore = 0;
	
	var toothExtractionPrimary = document
		.getElementsByName(toothExtractionVariables.toothExtractionPrimary);
	var toothExtractionHowManyTimes = document
		.getElementsByName(toothExtractionVariables.toothExtractionHowManyTimes);
	var toothExtractionExcessiveTimes = document
		.getElementsByName(toothExtractionVariables.toothExtractionExcessiveTimes);
	var toothExtractionExcessiveBleeding = document
		.getElementsByName(toothExtractionVariables.toothExtractionExcessiveBleeding);
	var toothExtractionTreatment = document
		.getElementsByName(toothExtractionVariables.toothExtractionTreatment);
	var toothExtractionTreatedHow = document
		.getElementsByName(toothExtractionVariables.toothExtractionTreatedHow);
	var toothExtractionTotalScore = document
		.getElementsByName(toothExtractionVariables.toothExtractionTotalScore);
	
	var str = "_";
	var toothExtractionExcessiveBleedingArray= new Array(toothExtractionSections);
	toothExtractionExcessiveBleedingArray[0] = toothExtractionVariables.toothExtractionExcessiveBleeding;

	for (var i = 1; i < toothExtractionExcessiveBleedingArray.length; i++) {
		var field = toothExtractionExcessiveBleedingArray[i-1];
		var fieldElements = field.split("_");
		var firstIncrement = Number(fieldElements[1]) + 1;
		var secondIncrement = Number(fieldElements[2]) + 1;
		var nextTreatedHowID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
		toothExtractionExcessiveBleedingArray[i] = String(nextTreatedHowID);
	}
	
	var toothExtractionTreatmentArray= new Array(toothExtractionSections);
	toothExtractionTreatmentArray[0] = toothExtractionVariables.toothExtractionTreatment;

	for (var i = 1; i < toothExtractionTreatmentArray.length; i++) {
		var field = toothExtractionTreatmentArray[i-1];
		var fieldElements = field.split("_");
		var firstIncrement = Number(fieldElements[1]) + 1;
		var secondIncrement = Number(fieldElements[2]) + 1;
		var nextTreatedHowID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
		toothExtractionTreatmentArray[i] = String(nextTreatedHowID);
	}
	
	var toothExtractionTreatedHowArray= new Array(toothExtractionSections);
	toothExtractionTreatedHowArray[0] = toothExtractionVariables.toothExtractionTreatedHow;

	for (var i = 1; i < toothExtractionTreatedHowArray.length; i++) {
		var field = toothExtractionTreatedHowArray[i-1];
		var fieldElements = field.split("_");
		var firstIncrement = Number(fieldElements[1]) + 1;
		var secondIncrement = Number(fieldElements[2]) + 1;
		var nextTreatedHowID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
		toothExtractionTreatedHowArray[i] = String(nextTreatedHowID);
	}
	
	if (toothExtractionPrimary[0].checked) {
		var toothNoOfTimes = toothExtractionHowManyTimes[0].value;
		if (toothNoOfTimes.includes(">")) {
			var tempNoOfTeeth = toothNoOfTimes.split(">");
			toothNoOfTimes = Number(tempNoOfTeeth[1]);
		}
		
		if (isNaN(toothNoOfTimes)) {
			alert ("Tooth Extraction Section:  Please enter a number in the How many times have you had teeth extracted? field.  " +
			"Score cannot be calculated!");
		}
		
		for (var i=0; i<toothExtractionExcessiveTimes.length; i++) {

			if (toothExtractionExcessiveTimes[i].checked) {
				if (i != toothExtractionExcessiveTimes.length-1) {
					var answer = Number(toothExtractionExcessiveTimes[i].value);
					toothNoOfTimesExcessive = Number(answer);
				} else {
					if (toothNoOfTimes == 0) {
						toothNoOfTimes = 5;
						toothNoOfTimesExcessive = 5;
					} else
						toothNoOfTimesExcessive = toothNoOfTimes;
				}
			}
		}
		
		if (toothNoOfTimesExcessive == 0)
			toothExtractionScore = 0;
		else if ((toothNoOfTimesExcessive/toothNoOfTimes)*100 < 25)
			toothExtractionScore = toothExtractionScore + 1;
		else if ((toothNoOfTimesExcessive/toothNoOfTimes)*100 >= 25)
			toothExtractionScore = toothExtractionScore + 2;
		
		for (var i = 0; i<toothExtractionTreatedHowArray.length; i++) {
			var currentSection = document.getElementsByName(String(toothExtractionTreatedHowArray[i]));
			var topLevelQuestion = document.getElementsByName(String(toothExtractionExcessiveBleedingArray[i]));
			var secondLevelQuestion = document.getElementsByName(String(toothExtractionTreatmentArray[i]));
			if (topLevelQuestion[0].checked && secondLevelQuestion[0].checked) {
				for (var j=0; j<currentSection.length; j++) {
	
					if (currentSection[j].checked) {
						var answer = currentSection[j].value;
						var answerValue = answer.split("|");
						if (Number(answerValue[1]) > toothExtractionScore)
							toothExtractionScore = Number(answerValue[1]);
					}
				}
			}
		}
	}
	
	//Tooth Extraction score
	toothExtractionTotalScore[0].value= toothExtractionScore;
	return toothExtractionScore;
}

function calcSurgery() {
	
	var noOfTimesExcessive = 0;
	var surgeryScore = 0;
	
	var surgeryPrimary = document
		.getElementsByName(surgeryVariables.surgeryPrimary);
	var surgeryHowManyTimes = document
		.getElementsByName(surgeryVariables.surgeryHowManyTimes);
	var surgeryExcessiveTimes = document
		.getElementsByName(surgeryVariables.surgeryExcessiveTimes);
	var surgeryExcessiveBleeding = document
		.getElementsByName(surgeryVariables.surgeryExcessiveBleeding);
	var surgeryTreatment = document
		.getElementsByName(surgeryVariables.surgeryTreatment);
	var surgeryTreatedHow = document
		.getElementsByName(surgeryVariables.surgeryTreatedHow);
	var surgeryTotalScore = document
		.getElementsByName(surgeryVariables.surgeryTotalScore);
	
	var str = "_";
	var surgeryExcessiveBleedingArray= new Array(surgerySections);
	surgeryExcessiveBleedingArray[0] = surgeryVariables.surgeryExcessiveBleeding;
	
	for (var i = 1; i < surgeryExcessiveBleedingArray.length; i++) {
		var field = surgeryExcessiveBleedingArray[i-1];
		var fieldElements = field.split("_");
		var firstIncrement = Number(fieldElements[1]) + 1;
		var secondIncrement = Number(fieldElements[2]) + 1;
		var nextTreatedHowID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
		surgeryExcessiveBleedingArray[i] = String(nextTreatedHowID);
	}
	
	var surgeryTreatmentArray= new Array(surgerySections);
	surgeryTreatmentArray[0] = surgeryVariables.surgeryTreatment;
	
	for (var i = 1; i < surgeryTreatmentArray.length; i++) {
		var field = surgeryTreatmentArray[i-1];
		var fieldElements = field.split("_");
		var firstIncrement = Number(fieldElements[1]) + 1;
		var secondIncrement = Number(fieldElements[2]) + 1;
		var nextTreatedHowID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
		surgeryTreatmentArray[i] = String(nextTreatedHowID);
	}
	
	var surgeryTreatedHowArray= new Array(surgerySections);
	surgeryTreatedHowArray[0] = surgeryVariables.surgeryTreatedHow;
	
	for (var i = 1; i < surgeryTreatedHowArray.length; i++) {
		var field = surgeryTreatedHowArray[i-1];
		var fieldElements = field.split("_");
		var firstIncrement = Number(fieldElements[1]) + 1;
		var secondIncrement = Number(fieldElements[2]) + 1;
		var nextTreatedHowID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
		surgeryTreatedHowArray[i] = String(nextTreatedHowID);
	}
	
	if (surgeryPrimary[0].checked) {
		var noOfTimes = surgeryHowManyTimes[0].value;
		if (noOfTimes.includes(">")) {
			var tempNoOfSurgeries = noOfTimes.split(">");
			noOfTimes = Number(tempNoOfSurgeries[1]);
		}
		
		if (isNaN(noOfTimes)) {
			alert ("Surgery Section:  Please enter a number in the How many surgeries have you had? field.  " +
			"Score cannot be calculated!");
		}
		
		for (var i=0; i<surgeryExcessiveTimes.length; i++) {

			if (surgeryExcessiveTimes[i].checked) {
				if (i != surgeryExcessiveTimes.length-1) {
					var answer = Number(surgeryExcessiveTimes[i].value);
					noOfTimesExcessive = Number(answer);
				} else {
					if (noOfTimes == 0) {
						noOfTimes = 5;
						noOfTimesExcessive = 5;
					} else
						noOfTimesExcessive = noOfTimes;
				}
			}
		}

		if (noOfTimesExcessive == 0 || noOfTimes == 0)
			surgeryScore = 0;
		else if ((noOfTimesExcessive/noOfTimes)*100 < 25)
			surgeryScore = surgeryScore + 1;
		else if ((noOfTimesExcessive/noOfTimes)*100 >= 25)
			surgeryScore = surgeryScore + 2;

		for (var i = 0; i<surgeryTreatedHowArray.length; i++) {
			var currentSection = document.getElementsByName(String(surgeryTreatedHowArray[i]));
			var topLevelQuestion = document.getElementsByName(String(surgeryExcessiveBleedingArray[i]));
			var secondLevelQuestion = document.getElementsByName(String(surgeryTreatmentArray[i]));
			if (topLevelQuestion[0].checked && secondLevelQuestion[0].checked) {
				for (var j=0; j<currentSection.length; j++) {

					if (currentSection[j].checked) {
						var answer = currentSection[j].value;
						var answerValue = answer.split("|");
						if (Number(answerValue[1]) > surgeryScore)
							surgeryScore = Number(answerValue[1]);
					}
				}
			}
		}
	}
	
	//Surgery score
	surgeryTotalScore[0].value= surgeryScore;
	return surgeryScore;
}

function calcDelivery() {
	
	var deliveryScore = 0;
	
	var deliveryPrimary = document
		.getElementsByName(deliveryVariables.deliveryPrimary);
	var deliveryTreatment = document
		.getElementsByName(deliveryVariables.deliveryTreatment);
	var deliveryTreatedHow = document
		.getElementsByName(deliveryVariables.deliveryTreatedHow);
	var deliveryHospital = document
		.getElementsByName(deliveryVariables.deliveryHospital);
	var deliveryTotalScore = document
		.getElementsByName(deliveryVariables.deliveryTotalScore);
	
	var str = "_";
	var deliveryTreatmentArray= new Array(deliverySections);
	deliveryTreatmentArray[0] = deliveryVariables.deliveryTreatment;
	
	for (var i = 1; i < deliveryTreatmentArray.length; i++) {
		var field = deliveryTreatmentArray[i-1];
		var fieldElements = field.split("_");
		var firstIncrement = Number(fieldElements[1]) + 1;
		var secondIncrement = Number(fieldElements[2]) + 1;
		var nextTreatedHowID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
		deliveryTreatmentArray[i] = String(nextTreatedHowID);
	}
	
	var deliveryTreatedHowArray= new Array(deliverySections);
	deliveryTreatedHowArray[0] = deliveryVariables.deliveryTreatedHow;
	
	for (var i = 1; i < deliveryTreatedHowArray.length; i++) {
		var field = deliveryTreatedHowArray[i-1];
		var fieldElements = field.split("_");
		var firstIncrement = Number(fieldElements[1]) + 1;
		var secondIncrement = Number(fieldElements[2]) + 1;
		var nextTreatedHowID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
		deliveryTreatedHowArray[i] = String(nextTreatedHowID);
	}
	
	var deliveryHospitalArray= new Array(deliverySections);
	deliveryHospitalArray[0] = deliveryVariables.deliveryHospital;
	
	for (var i = 1; i < deliveryHospitalArray.length; i++) {
		var field = deliveryHospitalArray[i-1];
		var fieldElements = field.split("_");
		var firstIncrement = Number(fieldElements[1]) + 1;
		var secondIncrement = Number(fieldElements[2]) + 1;
		var nextTreatedHowID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
		deliveryHospitalArray[i] = String(nextTreatedHowID);
	}
	
	if (deliveryPrimary[0].checked) {
		for (var i = 0; i<deliveryTreatedHowArray.length; i++) {
			var currentSection = document.getElementsByName(String(deliveryTreatedHowArray[i]));
			var topLevelQuestion = document.getElementsByName(String(deliveryTreatmentArray[i]));
			if (topLevelQuestion[0].checked) {
				for (var j=0; j<currentSection.length; j++) {

					if (currentSection[j].checked) {
						var answer = currentSection[j].value;
						var answerValue = answer.split("|");
						if (Number(answerValue[1]) > deliveryScore)
							deliveryScore = Number(answerValue[1]);
					}
				}
			}
		}

		for (var i = 0; i<deliveryHospitalArray.length; i++) {
			var currentSection = document.getElementsByName(String(deliveryHospitalArray[i]));
			var topLevelQuestion = document.getElementsByName(String(deliveryTreatmentArray[i]));
			if (topLevelQuestion[0].checked) {
				for (var j=0; j<currentSection.length; j++) {

					if (currentSection[j].checked) {
						var answer = currentSection[j].value;
						var answerValue = answer.split("|");
						if (Number(answerValue[1]) > deliveryScore)
							deliveryScore = Number(answerValue[1]);
					}
				}
			}
		}
	}
	
	//Deliveries score
	deliveryTotalScore[0].value= deliveryScore;
	return deliveryScore;
}

function calcCNS() {
	
	var cnsScore = 0;
	
	var cnsPrimary = document
		.getElementsByName(cnsVariables.cnsPrimary);
	var cnsTreatment = document
		.getElementsByName(cnsVariables.cnsTreatment);
	var cnsTreatedHow = document
		.getElementsByName(cnsVariables.cnsTreatedHow);
	var cnsTotalScore = document
		.getElementsByName(cnsVariables.cnsTotalScore);
	
	var str = "_";
	var cnsTreatmentArray= new Array(cnsSections);
	cnsTreatmentArray[0] = cnsVariables.cnsTreatment;
	
	for (var i = 1; i < cnsTreatmentArray.length; i++) {
		var field = cnsTreatmentArray[i-1];
		var fieldElements = field.split("_");
		var firstIncrement = Number(fieldElements[1]) + 1;
		var secondIncrement = Number(fieldElements[2]) + 1;
		var nextTreatedHowID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
		cnsTreatmentArray[i] = String(nextTreatedHowID);
	}
	
	var cnsTreatedHowArray= new Array(cnsSections);
	cnsTreatedHowArray[0] = cnsVariables.cnsTreatedHow;
	
	for (var i = 1; i < cnsTreatedHowArray.length; i++) {
		var field = cnsTreatedHowArray[i-1];
		var fieldElements = field.split("_");
		var firstIncrement = Number(fieldElements[1]) + 1;
		var secondIncrement = Number(fieldElements[2]) + 1;
		var nextTreatedHowID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
		cnsTreatedHowArray[i] = String(nextTreatedHowID);
	}
	
	if (cnsPrimary[0].checked) {
		for (var i = 0; i<cnsTreatedHowArray.length; i++) {
			var currentSection = document.getElementsByName(String(cnsTreatedHowArray[i]));
			var topLevelQuestion = document.getElementsByName(String(cnsTreatmentArray[i]));
			if (topLevelQuestion[0].checked) {
				for (var j=0; j<currentSection.length; j++) {

					if (currentSection[j].checked) {
						var answer = currentSection[j].value;
						var answerValue = answer.split("|");
						if (Number(answerValue[1]) > cnsScore)
							cnsScore = Number(answerValue[1]);
					}
				}
			}
		}
	}
	
	//CNS Bleeding score
	cnsTotalScore[0].value= cnsScore;
	return cnsScore;
}

function calcHemarthrosis() {
	
	var hemarthrosisScore = 0;
	
	var hemarthrosisPrimary = document
		.getElementsByName(hemarthrosisVariables.hemarthrosisPrimary);
	var hemarthrosisBleedingType = document
		.getElementsByName(hemarthrosisVariables.hemarthrosisBleedingType);
	var hemarthrosisTreatment = document
		.getElementsByName(hemarthrosisVariables.hemarthrosisTreatment);
	var hemarthrosisTreatedHow = document
		.getElementsByName(hemarthrosisVariables.hemarthrosisTreatedHow);
	var hemarthrosisTotalScore = document
		.getElementsByName(hemarthrosisVariables.hemarthrosisTotalScore);
	
	var str = "_";
	var hemarthrosisBleedingTypeArray= new Array(hemarthrosisSections);
	hemarthrosisBleedingTypeArray[0] = hemarthrosisVariables.hemarthrosisBleedingType;
	
	for (var i = 1; i < hemarthrosisBleedingTypeArray.length; i++) {
		var field = hemarthrosisBleedingTypeArray[i-1];
		var fieldElements = field.split("_");
		var firstIncrement = Number(fieldElements[1]) + 1;
		var secondIncrement = Number(fieldElements[2]) + 1;
		var nextTreatedHowID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
		hemarthrosisBleedingTypeArray[i] = String(nextTreatedHowID);
	}
	
	var hemarthrosisTreatmentArray= new Array(hemarthrosisSections);
	hemarthrosisTreatmentArray[0] = hemarthrosisVariables.hemarthrosisTreatment;
	
	for (var i = 1; i < hemarthrosisTreatmentArray.length; i++) {
		var field = hemarthrosisTreatmentArray[i-1];
		var fieldElements = field.split("_");
		var firstIncrement = Number(fieldElements[1]) + 1;
		var secondIncrement = Number(fieldElements[2]) + 1;
		var nextTreatedHowID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
		hemarthrosisTreatmentArray[i] = String(nextTreatedHowID);
	}
	var hemarthrosisTreatedHowArray= new Array(hemarthrosisSections);
	hemarthrosisTreatedHowArray[0] = hemarthrosisVariables.hemarthrosisTreatedHow;
	
	for (var i = 1; i < hemarthrosisTreatedHowArray.length; i++) {
		var field = hemarthrosisTreatedHowArray[i-1];
		var fieldElements = field.split("_");
		var firstIncrement = Number(fieldElements[1]) + 1;
		var secondIncrement = Number(fieldElements[2]) + 1;
		var nextTreatedHowID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
		hemarthrosisTreatedHowArray[i] = String(nextTreatedHowID);
	}
	
	if (hemarthrosisPrimary[0].checked) {
		for (var i = 0; i<hemarthrosisBleedingTypeArray.length; i++) {
			var currentSection = document.getElementsByName(String(hemarthrosisBleedingTypeArray[i]));
			for (var j=0; j<currentSection.length; j++) {

				if (currentSection[j].checked) {
					var answer = currentSection[j].value;
					var answerValue = answer.split("|");
					if (Number(answerValue[1]) > hemarthrosisScore)
						hemarthrosisScore = Number(answerValue[1]);
				}
			}
		}

		for (var i = 0; i<hemarthrosisTreatedHowArray.length; i++) {
			var currentSection = document.getElementsByName(String(hemarthrosisTreatedHowArray[i]));
			var topLevelQuestion = document.getElementsByName(String(hemarthrosisTreatmentArray[i]));
			if (topLevelQuestion[0].checked) {
				for (var j=0; j<currentSection.length; j++) {

					if (currentSection[j].checked) {
						var answer = currentSection[j].value;
						var answerValue = answer.split("|");
						if (Number(answerValue[1]) > hemarthrosisScore)
							hemarthrosisScore = Number(answerValue[1]);
					}
				}
			}
		}
	}
	
	//Hemarthrosis score
	hemarthrosisTotalScore[0].value= hemarthrosisScore;
	return hemarthrosisScore;
}

function calcHematoma() {
	
	var hematomaScore = 0;
	
	var hematomaPrimary = document
		.getElementsByName(hematomaVariables.hematomaPrimary);
	var hematomaBleedingType = document
		.getElementsByName(hematomaVariables.hematomaBleedingType);
	var hematomaTreatment = document
		.getElementsByName(hematomaVariables.hematomaTreatment);
	var hematomaTreatedHow = document
		.getElementsByName(hematomaVariables.hematomaTreatedHow);
	var hematomaTotalScore = document
		.getElementsByName(hematomaVariables.hematomaTotalScore);
	
	var str = "_";
	var hematomaBleedingTypeArray= new Array(hematomaSections);
	hematomaBleedingTypeArray[0] = hematomaVariables.hematomaBleedingType;
	
	for (var i = 1; i < hematomaBleedingTypeArray.length; i++) {
		var field = hematomaBleedingTypeArray[i-1];
		var fieldElements = field.split("_");
		var firstIncrement = Number(fieldElements[1]) + 1;
		var secondIncrement = Number(fieldElements[2]) + 1;
		var nextTreatedHowID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
		hematomaBleedingTypeArray[i] = String(nextTreatedHowID);
	}
	
	var hematomaTreatmentArray= new Array(hematomaSections);
	hematomaTreatmentArray[0] = hematomaVariables.hematomaTreatment;
	
	for (var i = 1; i < hematomaTreatmentArray.length; i++) {
		var field = hematomaTreatmentArray[i-1];
		var fieldElements = field.split("_");
		var firstIncrement = Number(fieldElements[1]) + 1;
		var secondIncrement = Number(fieldElements[2]) + 1;
		var nextTreatedHowID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
		hematomaTreatmentArray[i] = String(nextTreatedHowID);
	}
	var hematomaTreatedHowArray= new Array(hematomaSections);
	hematomaTreatedHowArray[0] = hematomaVariables.hematomaTreatedHow;
	
	for (var i = 1; i < hematomaTreatedHowArray.length; i++) {
		var field = hematomaTreatedHowArray[i-1];
		var fieldElements = field.split("_");
		var firstIncrement = Number(fieldElements[1]) + 1;
		var secondIncrement = Number(fieldElements[2]) + 1;
		var nextTreatedHowID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
		hematomaTreatedHowArray[i] = String(nextTreatedHowID);
	}
	
	if (hematomaPrimary[0].checked) {
		for (var i = 0; i<hematomaBleedingTypeArray.length; i++) {
			var currentSection = document.getElementsByName(String(hematomaBleedingTypeArray[i]));
			for (var j=0; j<currentSection.length; j++) {

				if (currentSection[j].checked) {
					var answer = currentSection[j].value;
					var answerValue = answer.split("|");
					if (Number(answerValue[1]) > hematomaScore)
						hematomaScore = Number(answerValue[1]);
				}
			}
		}

		for (var i = 0; i<hematomaTreatedHowArray.length; i++) {
			var currentSection = document.getElementsByName(String(hematomaTreatedHowArray[i]));
			var topLevelQuestion = document.getElementsByName(String(hematomaTreatmentArray[i]));
			if (topLevelQuestion[0].checked) {
				for (var j=0; j<currentSection.length; j++) {

					if (currentSection[j].checked) {
						var answer = currentSection[j].value;
						var answerValue = answer.split("|");
						if (Number(answerValue[1]) > hematomaScore)
							hematomaScore = Number(answerValue[1]);
					}
				}
			}
		}
	}
	
	//hematoma score
	hematomaTotalScore[0].value= hematomaScore;
	return hematomaScore;
}

function calcTotalScore() {	
	var totalScore = calcNoseBleed()
					+ calcCutaneous()
					+ calcMinorWounds()
					+ calcOralCavity()
					+ calcToothExtraction()
					+ calcGIBleeding()
					+ calcHematuria()
					+ calcSurgery()
					+ calcMenstrual()
					+ calcDelivery()
					+ calcOtherBleeding()
					+ calcCNS()
					+ calcHemarthrosis()
					+ calcHematoma();
	
	var totalScoreTop = document
		.getElementsByName(totalScoreVariables.totalScoreTop);
	var totalScoreBottom = document
		.getElementsByName(totalScoreVariables.totalScoreBottom);
	
	totalScoreTop[0].value = totalScore;
	totalScoreBottom[0].value = totalScore;
}

function testMapping() {
	document.getElementById(noseBleedVariables.epistaxisPrimary + "_id").style.color = "red";
	document.getElementById(noseBleedVariables.epistaxisHowMany + "_id").style.color = "red";
	document.getElementById(noseBleedVariables.epistaxisHowLong + "_id").style.color = "red";
	document.getElementById(noseBleedVariables.epistaxisSeekMedAttn + "_id").style.color = "red";
	document.getElementById(noseBleedVariables.epistaxisTreatedHow + "_id").style.color = "red";
	document.getElementById(noseBleedVariables.epistaxisTotalScore + "_id").style.color = "red";
	
	document.getElementById(cutaneousVariables.bruisingPrimary + "_id").style.color = "red";
	document.getElementById(cutaneousVariables.bruisingTrauma + "_id").style.color = "red";
	document.getElementById(cutaneousVariables.bruisingMedicalAttention + "_id").style.color = "red";
	document.getElementById(cutaneousVariables.bruisingTreatedHow + "_id").style.color = "red";
	document.getElementById(cutaneousVariables.bruisingMultiple + "_id").style.color = "red";
	document.getElementById(cutaneousVariables.bruisingTotalScore + "_id").style.color = "red";
	
	document.getElementById(minorWoundsVariables.minorWoundsPrimary + "_id").style.color = "red";
	document.getElementById(minorWoundsVariables.minorWoundsHowMany + "_id").style.color = "red";
	document.getElementById(minorWoundsVariables.minorWoundsHowLong + "_id").style.color = "red";
	document.getElementById(minorWoundsVariables.minorWoundsSeekMedAttn + "_id").style.color = "red";
	document.getElementById(minorWoundsVariables.minorWoundsTreatedHow + "_id").style.color = "red";
	document.getElementById(minorWoundsVariables.minorWoundsTotalScore + "_id").style.color = "red";
	
	document.getElementById(oralCavityVariables.oralCavityPrimary + "_id").style.color = "red";
	document.getElementById(oralCavityVariables.oralCavitySeekMedAttn + "_id").style.color = "red";
	document.getElementById(oralCavityVariables.oralCavityTreatedHow + "_id").style.color = "red";
	document.getElementById(oralCavityVariables.oralCavityTotalScore + "_id").style.color = "red";
	
	document.getElementById(giBleedingVariables.giBleedingPrimary + "_id").style.color = "red";
	document.getElementById(giBleedingVariables.giBleedingOtherIllness + "_id").style.color = "red";
	document.getElementById(giBleedingVariables.giBleedingSeekMedAttn + "_id").style.color = "red";
	document.getElementById(giBleedingVariables.giBleedingTreatedHow + "_id").style.color = "red";
	document.getElementById(giBleedingVariables.giBleedingTotalScore + "_id").style.color = "red";
	
	document.getElementById(hematuriaVariables.hematuriaPrimary + "_id").style.color = "red";
	document.getElementById(hematuriaVariables.hematuriaSeekMedAttn + "_id").style.color = "red";
	document.getElementById(hematuriaVariables.hematuriaTreatedHow + "_id").style.color = "red";
	document.getElementById(hematuriaVariables.hematuriaTotalScore + "_id").style.color = "red";
	
	document.getElementById(menstrualVariables.menstrualPrimary + "_id").style.color = "red";
	document.getElementById(menstrualVariables.menstrualHowLong + "_id").style.color = "red";
	document.getElementById(menstrualVariables.menstrualPassClots + "_id").style.color = "red";
	document.getElementById(menstrualVariables.menstrualHeaviestDay + "_id").style.color = "red";
	document.getElementById(menstrualVariables.menstrualExcessiveBleeding + "_id").style.color = "red";
	document.getElementById(menstrualVariables.menstrualHowLongExcessive + "_id").style.color = "red";
	document.getElementById(menstrualVariables.menstrualMedicalAttention + "_id").style.color = "red";
	document.getElementById(menstrualVariables.menstrualReceiveTreatment + "_id").style.color = "red";
	document.getElementById(menstrualVariables.menstrualTreatedHow + "_id").style.color = "red";
	document.getElementById(menstrualVariables.menstrualHospitalization + "_id").style.color = "red";
	document.getElementById(menstrualVariables.menstrualTimeOffWork + "_id").style.color = "red";
	document.getElementById(menstrualVariables.menstrualPictoralScore + "_id").style.color = "red";
	document.getElementById(menstrualVariables.menstrualTotalScore + "_id").style.color = "red";
	
	document.getElementById(otherBleedingVariables.otherNeonatalExcessive + "_id").style.color = "red";
	document.getElementById(otherBleedingVariables.otherNeonatalType + "_id").style.color = "red";
	document.getElementById(otherBleedingVariables.otherNeonatalTreatment + "_id").style.color = "red";
	document.getElementById(otherBleedingVariables.otherNeonatalTreatedHow + "_id").style.color = "red";
	document.getElementById(otherBleedingVariables.otherBleedingTotalScore + "_id").style.color = "red";
	
	document.getElementById(toothExtractionVariables.toothExtractionPrimary + "_id").style.color = "red";
	document.getElementById(toothExtractionVariables.toothExtractionHowManyTimes + "_id").style.color = "red";
	document.getElementById(toothExtractionVariables.toothExtractionExcessiveTimes + "_id").style.color = "red";
	document.getElementById(toothExtractionVariables.toothExtractionExcessiveBleeding + "_id").style.color = "red";
	document.getElementById(toothExtractionVariables.toothExtractionTreatment + "_id").style.color = "red";
	document.getElementById(toothExtractionVariables.toothExtractionTreatedHow + "_id").style.color = "red";
	document.getElementById(toothExtractionVariables.toothExtractionTotalScore + "_id").style.color = "red";
	
	document.getElementById(surgeryVariables.surgeryPrimary + "_id").style.color = "red";
	document.getElementById(surgeryVariables.surgeryHowManyTimes + "_id").style.color = "red";
	document.getElementById(surgeryVariables.surgeryExcessiveTimes + "_id").style.color = "red";
	document.getElementById(surgeryVariables.surgeryExcessiveBleeding + "_id").style.color = "red";
	document.getElementById(surgeryVariables.surgeryTreatment + "_id").style.color = "red";
	document.getElementById(surgeryVariables.surgeryTreatedHow + "_id").style.color = "red";
	document.getElementById(surgeryVariables.surgeryTotalScore + "_id").style.color = "red";
	
	document.getElementById(deliveryVariables.deliveryPrimary + "_id").style.color = "red";
	document.getElementById(deliveryVariables.deliveryTreatment + "_id").style.color = "red";
	document.getElementById(deliveryVariables.deliveryTreatedHow + "_id").style.color = "red";
	document.getElementById(deliveryVariables.deliveryHospital + "_id").style.color = "red";
	document.getElementById(deliveryVariables.deliveryTotalScore + "_id").style.color = "red";
	
	document.getElementById(cnsVariables.cnsPrimary + "_id").style.color = "red";
	document.getElementById(cnsVariables.cnsTreatment + "_id").style.color = "red";
	document.getElementById(cnsVariables.cnsTreatedHow + "_id").style.color = "red";
	document.getElementById(cnsVariables.cnsTotalScore + "_id").style.color = "red";
	
	document.getElementById(hemarthrosisVariables.hemarthrosisPrimary + "_id").style.color = "red";
	document.getElementById(hemarthrosisVariables.hemarthrosisBleedingType + "_id").style.color = "red";
	document.getElementById(hemarthrosisVariables.hemarthrosisTreatment + "_id").style.color = "red";
	document.getElementById(hemarthrosisVariables.hemarthrosisTreatedHow + "_id").style.color = "red";
	document.getElementById(hemarthrosisVariables.hemarthrosisTotalScore + "_id").style.color = "red";
	
	document.getElementById(hematomaVariables.hematomaPrimary + "_id").style.color = "red";
	document.getElementById(hematomaVariables.hematomaBleedingType + "_id").style.color = "red";
	document.getElementById(hematomaVariables.hematomaTreatment + "_id").style.color = "red";
	document.getElementById(hematomaVariables.hematomaTreatedHow + "_id").style.color = "red";
	document.getElementById(hematomaVariables.hematomaTotalScore + "_id").style.color = "red";
}
