var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;

function calcScore() {
	calcTotalScore();
	if (formStatus[0].value == '15736')
		testMapping();
}

function calcTotalScore() {
	var totalScore = calcNoseBleed()
					+ calcCutaneous()
					+ calcMinorWounds()
					+ calcHematuria()
					+ calcGIBleeding()
					+ calcOralCavity()
					+ calcToothExtraction()
					+ calcSurgery()
					+ calcMenstrual()
					+ calcDelivery()
					+ calcHematoma()
					+ calcHemarthrosis()
					+ calcCNS()
					+ calcOtherBleeding();

	var totalScoreTop = document
		.getElementsByName(totalScoreVariables.totalScoreTop);
	var totalScoreBottom = document
		.getElementsByName(totalScoreVariables.totalScoreBottom);
	
	totalScoreTop[0].value = totalScore;
	//totalScoreBottom[0].value = totalScore;
}

function calcNoseBleed() {
	
	var noseBleedScore = 0;

	var epistaxisTotalScore = document
			.getElementsByName(noseBleedVariables.epistaxisTotalScore);
	var epistaxisPrimary = document
			.getElementsByName(noseBleedVariables.epistaxisPrimary);
	var epistaxisSeekMedAttn = document
			.getElementsByName(noseBleedVariables.epistaxisSeekMedAttn);
	var epistaxisTreatedHow = document
			.getElementsByName(noseBleedVariables.epistaxisTreatedHow);
	var epistaxisHowMany = document
			.getElementsByName(noseBleedVariables.epistaxisHowMany);
	var epistaxisHowLong = document
			.getElementsByName(noseBleedVariables.epistaxisHowLong);
	
	//Start scoring
	if (epistaxisPrimary[0].checked) {
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
	var bruisingMedicalAttention = document
		.getElementsByName(cutaneousVariables.bruisingMedicalAttention);
	var bruisingTreatedHow = document
		.getElementsByName(cutaneousVariables.bruisingTreatedHow);
	var bruisingTrauma = document
		.getElementsByName(cutaneousVariables.bruisingTrauma);
	var bruisingSize = document
		.getElementsByName(cutaneousVariables.bruisingSize);
	var bruisingMultiple = document
		.getElementsByName(cutaneousVariables.bruisingMultiple);

	//Start scoring
	if (bruisingPrimary[0].checked) {	
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
		
		for (var i=0; i<bruisingTrauma.length; i++) {
			if (bruisingTrauma[i].checked) {
				var answer = bruisingTrauma[i].value;
				var answerValue = answer.split("|");
				if (Number(answerValue[1]) > bruisingScore)
					bruisingScore = Number(answerValue[1]);
			}
		}
		
		for (var i=0; i<bruisingSize.length; i++) {
			if (bruisingSize[i].checked) {
				var answer = bruisingSize[i].value;
				var answerValue = answer.split("|");
				if (Number(answerValue[1]) > bruisingScore)
					bruisingScore = Number(answerValue[1]);
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

	var minorWoundsTotalScore = document
		.getElementsByName(minorWoundsVariables.minorWoundsTotalScore);
	var minorWoundsPrimary = document
		.getElementsByName(minorWoundsVariables.minorWoundsPrimary);
	var minorWoundsSeekMedAttn = document
		.getElementsByName(minorWoundsVariables.minorWoundsSeekMedAttn);
	var minorWoundsTreatedHow = document
		.getElementsByName(minorWoundsVariables.minorWoundsTreatedHow);
	var minorWoundsHowMany = document
		.getElementsByName(minorWoundsVariables.minorWoundsHowMany);
	var minorWoundsHowLong = document
		.getElementsByName(minorWoundsVariables.minorWoundsHowLong);

	//Start scoring
	if (minorWoundsPrimary[0].checked) {
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
	var hematuriaOtherIllness = document
		.getElementsByName(hematuriaVariables.hematuriaOtherIllness);
	var hematuriaSeekMedAttn = document
		.getElementsByName(hematuriaVariables.hematuriaSeekMedAttn);
	var hematuriaTreatedHow = document
		.getElementsByName(hematuriaVariables.hematuriaTreatedHow);

	//Start scoring
	if (hematuriaPrimary[0].checked) {		
		for (var i=0; i<hematuriaOtherIllness.length; i++) {
			if (hematuriaOtherIllness[i].checked) {
				var answer = hematuriaOtherIllness[i].value;
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

function calcGIBleeding() {
	
	var giBleedingScore = 0;

	var giBleedingTotalScore = document
		.getElementsByName(giBleedingVariables.giBleedingTotalScore);
	var giBleedingPrimary = document
		.getElementsByName(giBleedingVariables.giBleedingPrimary);
	var giBleedingOtherIllness = document
		.getElementsByName(giBleedingVariables.giBleedingOtherIllness);
	var giBleedingSeekMedAttn = document
		.getElementsByName(giBleedingVariables.giBleedingSeekMedAttn);
	var giBleedingTreatedHow = document
		.getElementsByName(giBleedingVariables.giBleedingTreatedHow);

	//Start scoring
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

function calcOralCavity() {
	
	var oralCavityScore = 0;

	var oralCavityTotalScore = document
		.getElementsByName(oralCavityVariables.oralCavityTotalScore);
	var oralCavityPrimary = document
		.getElementsByName(oralCavityVariables.oralCavityPrimary);
	var oralCavitySeekMedAttn = document
		.getElementsByName(oralCavityVariables.oralCavitySeekMedAttn);
	var oralCavityTreatedHow = document
		.getElementsByName(oralCavityVariables.oralCavityTreatedHow);
	var oralCavityHowLong = document
	.getElementsByName(oralCavityVariables.oralCavityHowLong);

	//Start scoring
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
		
		for (var i=0; i<oralCavityHowLong.length; i++) {
			if (oralCavityHowLong[i].checked) {
				var answer = oralCavityHowLong[i].value;
				var answerValue = answer.split("|");
				if (Number(answerValue[1]) > oralCavityScore)
					oralCavityScore = Number(answerValue[1]);
			}
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
	var menstrualSpecify = document
		.getElementsByName(menstrualVariables.menstrualSpecify);
	var menstrualMedicalAttention = document
		.getElementsByName(menstrualVariables.menstrualMedicalAttention);
	var menstrualTreatedHow = document
		.getElementsByName(menstrualVariables.menstrualTreatedHow);
	var menstrualTimeOffWork = document
		.getElementsByName(menstrualVariables.menstrualTimeOffWork);
	var menstrualHowLong = document
		.getElementsByName(menstrualVariables.menstrualHowLong);
	var menstrualHospitalization = document
		.getElementsByName(menstrualVariables.menstrualHospitalization);
	var menstrualPictoralScore = document
		.getElementsByName(menstrualVariables.menstrualPictoralScore);

	//Start scoring
	if (menstrualPrimary[0].checked) {	
		for (var i=0; i<menstrualSpecify.length; i++) {
			if (menstrualSpecify[i].checked) {
				var answer = menstrualSpecify[i].value;
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
	
		if (menstrualMedicalAttention[0].checked) {
			for (var i=0; i<menstrualTreatedHow.length; i++) {
				if (menstrualTreatedHow[i].checked) {
					var answer = menstrualTreatedHow[i].value;
					var answerValue = answer.split("|");
					if (Number(answerValue[1]) > menstrualScore)
						menstrualScore = Number(answerValue[1]);
				}
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
		
		for (var i=0; i<menstrualHowLong.length; i++) {
			if (menstrualHowLong[i].checked) {
				var answer = menstrualHowLong[i].value;
				var answerValue = answer.split("|");
				if (Number(answerValue[1]) > menstrualScore)
					menstrualScore = Number(answerValue[1]);
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

function calcDelivery() {
	
	var deliveryScore = 0;

	var deliveryTotalScore = document
		.getElementsByName(deliveryVariables.deliveryTotalScore);
	var deliveryPrimary = document
		.getElementsByName(deliveryVariables.deliveryPrimary);
	var deliveryHowLong = document
		.getElementsByName(deliveryVariables.deliveryHowLong);
	var deliveryChangingPads = document
		.getElementsByName(deliveryVariables.deliveryChangingPads);
	var deliveryHospital = document
		.getElementsByName(deliveryVariables.deliveryHospital);
	var deliveryTreatment = document
		.getElementsByName(deliveryVariables.deliveryTreatment);
	var deliveryTreatedHow = document
		.getElementsByName(deliveryVariables.deliveryTreatedHow);
	
	//Start Scoring
	if (deliveryPrimary[0].checked) {
		for (var i=0; i<deliveryHowLong.length; i++) {
			if (deliveryHowLong[i].checked) {
				var answer = deliveryHowLong[i].value;
				var answerValue = answer.split("|");	
				if (Number(answerValue[1]) > deliveryScore)
					deliveryScore = Number(answerValue[1]);
			}
		}
		
		for (var i=0; i<deliveryChangingPads.length; i++) {
			if (deliveryChangingPads[i].checked) {
				var answer = deliveryChangingPads[i].value;
				var answerValue = answer.split("|");	
				if (Number(answerValue[1]) > deliveryScore)
					deliveryScore = Number(answerValue[1]);
			}
		}
		
		for (var i=0; i<deliveryHospital.length; i++) {
			if (deliveryHospital[i].checked) {
				var answer = deliveryHospital[i].value;
				var answerValue = answer.split("|");	
				if (Number(answerValue[1]) > deliveryScore)
					deliveryScore = Number(answerValue[1]);
			}
		}
		
		for (var i=0; i<deliveryTreatment.length; i++) {
			if (deliveryTreatment[i].checked) {
				var answer = deliveryTreatment[i].value;
				var answerValue = answer.split("|");	
				if (Number(answerValue[1]) > deliveryScore)
					deliveryScore = Number(answerValue[1]);
			}
		}
	
		if (deliveryTreatment[0].checked) {
			for (var i=0; i<deliveryTreatedHow.length; i++) {
				if (deliveryTreatedHow[i].checked) {
					var answer = deliveryTreatedHow[i].value;
					var answerValue = answer.split("|");
					if (Number(answerValue[1]) > deliveryScore)
						deliveryScore = Number(answerValue[1]);
				}
			}
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
	var hematomaType = document
		.getElementsByName(hematomaVariables.hematomaType);
	var hematomaTreatment = document
		.getElementsByName(hematomaVariables.hematomaTreatment);
	var hematomaTreatedHow = document
		.getElementsByName(hematomaVariables.hematomaTreatedHow);
	
	//Start scoring
	if (hematomaPrimary[0].checked) {
		for (var i=0; i<hematomaType.length; i++) {
			if (hematomaType[i].checked) {
				var answer = hematomaType[i].value;
				var answerValue = answer.split("|");	
				if (Number(answerValue[1]) > hematomaScore)
					hematomaScore = Number(answerValue[1]);
			}
		}
	
		if (hematomaTreatment[0].checked) {
			for (var i=0; i<hematomaTreatedHow.length; i++) {
				if (hematomaTreatedHow[i].checked) {
					var answer = hematomaTreatedHow[i].value;
					var answerValue = answer.split("|");
					if (Number(answerValue[1]) > hematomaScore)
						hematomaScore = Number(answerValue[1]);
				}
			}
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
	var hemarthrosisType = document
		.getElementsByName(hemarthrosisVariables.hemarthrosisType);
	var hemarthrosisTreatment = document
		.getElementsByName(hemarthrosisVariables.hemarthrosisTreatment);
	var hemarthrosisTreatedHow = document
		.getElementsByName(hemarthrosisVariables.hemarthrosisTreatedHow);
		
	//Start scoring
	if (hemarthrosisPrimary[0].checked) {
		for (var i=0; i<hemarthrosisType.length; i++) {
			if (hemarthrosisType[i].checked) {
				var answer = hemarthrosisType[i].value;
				var answerValue = answer.split("|");	
				if (Number(answerValue[1]) > hemarthrosisScore)
					hemarthrosisScore = Number(answerValue[1]);
			}
		}
	
		if (hemarthrosisTreatment[0].checked) {
			for (var i=0; i<hemarthrosisTreatedHow.length; i++) {
				if (hemarthrosisTreatedHow[i].checked) {
					var answer = hemarthrosisTreatedHow[i].value;
					var answerValue = answer.split("|");
					if (Number(answerValue[1]) > hemarthrosisScore)
						hemarthrosisScore = Number(answerValue[1]);
				}
			}
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
	var cnsType = document
		.getElementsByName(cnsVariables.cnsType);
	var cnsSpecify = document
		.getElementsByName(cnsVariables.cnsSpecify);
	var cnsTreatment = document
		.getElementsByName(cnsVariables.cnsTreatment);
	var cnsTreatedHow = document
		.getElementsByName(cnsVariables.cnsTreatedHow);
	
	//Start scoring
	if (cnsPrimary[0].checked) {
		if (cnsType[0].checked) {
			for (var i=0; i<cnsSpecify.length; i++) {
				if (cnsSpecify[i].checked) {
					var answer = cnsSpecify[i].value;
					var answerValue = answer.split("|");	
					if (Number(answerValue[1]) > cnsScore)
						cnsScore = Number(answerValue[1]);
				}
			}
		}
	
		if (cnsTreatment[0].checked) {
			for (var i=0; i<cnsTreatedHow.length; i++) {
				if (cnsTreatedHow[i].checked) {
					var answer = cnsTreatedHow[i].value;
					var answerValue = answer.split("|");
					if (Number(answerValue[1]) > cnsScore)
						cnsScore = Number(answerValue[1]);
				}
			}
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
	var otherBleedingType = document
		.getElementsByName(otherBleedingVariables.otherBleedingType);
	var otherBleedingTreatment = document
		.getElementsByName(otherBleedingVariables.otherBleedingTreatment);
	var otherBleedingTreatedHow = document
		.getElementsByName(otherBleedingVariables.otherBleedingTreatedHow);

	//Start scoring
	for (var i=0; i<otherBleedingType.length; i++) {
		if (otherBleedingType[i].checked) {
			var answer = otherBleedingType[i].value;
			var answerValue = answer.split("|");	
			if (Number(answerValue[1]) > otherBleedingScore)
				otherBleedingScore = Number(answerValue[1]);
		}
	}
	
	if (otherBleedingType[0].checked || otherBleedingType[1].checked || otherBleedingType[2].checked || otherBleedingType[3].checked ||
			otherBleedingType[4].checked || otherBleedingType[5].checked || otherBleedingType[6].checked) {
		for (var i=0; i<otherBleedingTreatment.length; i++) {
			if (otherBleedingTreatment[i].checked) {
				var answer = otherBleedingTreatment[i].value;
				var answerValue = answer.split("|");	
				if (Number(answerValue[1]) > otherBleedingScore)
					otherBleedingScore = Number(answerValue[1]);
			}
		}
	
		if (otherBleedingTreatment[0].checked) {
			for (var i=0; i<otherBleedingTreatedHow.length; i++) {
				if (otherBleedingTreatedHow[i].checked) {
					var answer = otherBleedingTreatedHow[i].value;
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

	var toothExtractionTotalScore = document
		.getElementsByName(toothExtractionVariables.toothExtractionTotalScore);
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
	
	//Creates field IDs for repeating tooth extraction sections
	toothExtractionExcessiveBleedingArray[0] = toothExtractionVariables.toothExtractionExcessiveBleeding;
	for (var i = 1; i < toothExtractionExcessiveBleedingArray.length; i++) {
		toothExtractionExcessiveBleedingArray[i] = String(generateNextID(toothExtractionExcessiveBleedingArray[i-1]));
	}
	
	toothExtractionTreatmentArray[0] = toothExtractionVariables.toothExtractionTreatment;
	for (var i = 1; i < toothExtractionTreatmentArray.length; i++) {
		toothExtractionTreatmentArray[i] = String(generateNextID(toothExtractionTreatmentArray[i-1]));
	}
	
	toothExtractionTreatedHowArray[0] = toothExtractionVariables.toothExtractionTreatedHow;
	for (var i = 1; i < toothExtractionTreatedHowArray.length; i++) {
		toothExtractionTreatedHowArray[i] = String(generateNextID(toothExtractionTreatedHowArray[i-1]));
	}
	
	//Start Scoring
	if (toothExtractionPrimary[0].checked) {
		var toothNoOfTimes = toothExtractionHowManyTimes[0].value;
		
		if (isNaN(toothNoOfTimes)) {
			alert ("Tooth Extraction Section:  Please enter a number in the How many times have you had tooth (teeth) extracted? field.  " +
			"Score cannot be calculated accurately!");
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
	
	//Creates field IDs for repeating surgery sections
	surgeryExcessiveBleedingArray[0] = surgeryVariables.surgeryExcessiveBleeding;
	for (var i = 1; i < surgeryExcessiveBleedingArray.length; i++) {
		surgeryExcessiveBleedingArray[i] = String(generateNextID(surgeryExcessiveBleedingArray[i-1]));
	}
	
	surgeryTreatmentArray[0] = surgeryVariables.surgeryTreatment;
	for (var i = 1; i < surgeryTreatmentArray.length; i++) {
		surgeryTreatmentArray[i] = String(generateNextID(surgeryTreatmentArray[i-1]));
	}
	
	surgeryTreatedHowArray[0] = surgeryVariables.surgeryTreatedHow;	
	for (var i = 1; i < surgeryTreatedHowArray.length; i++) {
		surgeryTreatedHowArray[i] = String(generateNextID(surgeryTreatedHowArray[i-1]));
	}
	
	//Start Scoring
	if (surgeryPrimary[0].checked) {
		var noOfTimes = surgeryHowManyTimes[0].value;
		
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

function generateNextID(currentID) {
	fieldElements = currentID.split("_");
	firstIncrement = Number(fieldElements[1]) + 1;
	secondIncrement = Number(fieldElements[2]) + 1;
	nextID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
	return nextID;
}

function testMapping() {
	document.getElementById(totalScoreVariables.totalScoreTop + "_id").style.color = "red";
	document.getElementById(totalScoreVariables.totalScoreBottom + "_id").style.color = "red";
	
	document.getElementById(noseBleedVariables.epistaxisTotalScore + "_id").style.color = "red";
	document.getElementById(noseBleedVariables.epistaxisPrimary + "_id").style.color = "red";
	document.getElementById(noseBleedVariables.epistaxisSeekMedAttn + "_id").style.color = "red";
	document.getElementById(noseBleedVariables.epistaxisTreatedHow + "_id").style.color = "red";
	document.getElementById(noseBleedVariables.epistaxisHowMany + "_id").style.color = "red";
	document.getElementById(noseBleedVariables.epistaxisHowLong + "_id").style.color = "red";

	document.getElementById(cutaneousVariables.bruisingTotalScore + "_id").style.color = "red";
	document.getElementById(cutaneousVariables.bruisingPrimary + "_id").style.color = "red";
	document.getElementById(cutaneousVariables.bruisingMedicalAttention + "_id").style.color = "red";
	document.getElementById(cutaneousVariables.bruisingTreatedHow + "_id").style.color = "red";
	document.getElementById(cutaneousVariables.bruisingTrauma + "_id").style.color = "red";
	document.getElementById(cutaneousVariables.bruisingSize + "_id").style.color = "red";
	document.getElementById(cutaneousVariables.bruisingMultiple + "_id").style.color = "red";

	document.getElementById(minorWoundsVariables.minorWoundsTotalScore + "_id").style.color = "red";
	document.getElementById(minorWoundsVariables.minorWoundsPrimary + "_id").style.color = "red";
	document.getElementById(minorWoundsVariables.minorWoundsSeekMedAttn + "_id").style.color = "red";
	document.getElementById(minorWoundsVariables.minorWoundsTreatedHow + "_id").style.color = "red";
	document.getElementById(minorWoundsVariables.minorWoundsHowMany + "_id").style.color = "red";
	document.getElementById(minorWoundsVariables.minorWoundsHowLong + "_id").style.color = "red";

	document.getElementById(hematuriaVariables.hematuriaTotalScore + "_id").style.color = "red";
	document.getElementById(hematuriaVariables.hematuriaPrimary + "_id").style.color = "red";
	document.getElementById(hematuriaVariables.hematuriaOtherIllness + "_id").style.color = "red";
	document.getElementById(hematuriaVariables.hematuriaSeekMedAttn + "_id").style.color = "red";
	document.getElementById(hematuriaVariables.hematuriaTreatedHow + "_id").style.color = "red";

	document.getElementById(giBleedingVariables.giBleedingTotalScore + "_id").style.color = "red";
	document.getElementById(giBleedingVariables.giBleedingPrimary + "_id").style.color = "red";
	document.getElementById(giBleedingVariables.giBleedingOtherIllness + "_id").style.color = "red";
	document.getElementById(giBleedingVariables.giBleedingSeekMedAttn + "_id").style.color = "red";
	document.getElementById(giBleedingVariables.giBleedingTreatedHow + "_id").style.color = "red";

	document.getElementById(oralCavityVariables.oralCavityTotalScore + "_id").style.color = "red";
	document.getElementById(oralCavityVariables.oralCavityPrimary + "_id").style.color = "red";
	document.getElementById(oralCavityVariables.oralCavitySeekMedAttn + "_id").style.color = "red";
	document.getElementById(oralCavityVariables.oralCavityTreatedHow + "_id").style.color = "red";
	document.getElementById(oralCavityVariables.oralCavityHowLong + "_id").style.color = "red";
	
	document.getElementById(toothExtractionVariables.toothExtractionPrimary + "_id").style.color = "red";
	document.getElementById(toothExtractionVariables.toothExtractionHowManyTimes + "_id").style.color = "red";
	document.getElementById(toothExtractionVariables.toothExtractionExcessiveTimes + "_id").style.color = "red";
	for (var i = 0; i < toothExtractionExcessiveBleedingArray.length; i++)
		document.getElementById(toothExtractionExcessiveBleedingArray[i] + "_id").style.color = "red";
	for (var i = 0; i < toothExtractionTreatmentArray.length; i++)
		document.getElementById(toothExtractionTreatmentArray[i] + "_id").style.color = "red";
	for (var i = 0; i < toothExtractionTreatedHowArray.length; i++)
		document.getElementById(toothExtractionTreatedHowArray[i] + "_id").style.color = "red";
	document.getElementById(toothExtractionVariables.toothExtractionTotalScore + "_id").style.color = "red";
	
	document.getElementById(surgeryVariables.surgeryPrimary + "_id").style.color = "red";
	document.getElementById(surgeryVariables.surgeryHowManyTimes + "_id").style.color = "red";
	document.getElementById(surgeryVariables.surgeryExcessiveTimes + "_id").style.color = "red";
	for (var i = 0; i < surgeryExcessiveBleedingArray.length; i++)
		document.getElementById(surgeryExcessiveBleedingArray[i] + "_id").style.color = "red";
	for (var i = 0; i < surgeryTreatmentArray.length; i++)
		document.getElementById(surgeryTreatmentArray[i] + "_id").style.color = "red";
	for (var i = 0; i < surgeryTreatedHowArray.length; i++)
		document.getElementById(surgeryTreatedHowArray[i] + "_id").style.color = "red";
	document.getElementById(surgeryVariables.surgeryTotalScore + "_id").style.color = "red";

	document.getElementById(menstrualVariables.menstrualTotalScore + "_id").style.color = "red";
	document.getElementById(menstrualVariables.menstrualPrimary + "_id").style.color = "red";
	document.getElementById(menstrualVariables.menstrualSpecify + "_id").style.color = "red";
	document.getElementById(menstrualVariables.menstrualMedicalAttention + "_id").style.color = "red";
	document.getElementById(menstrualVariables.menstrualTreatedHow + "_id").style.color = "red";
	document.getElementById(menstrualVariables.menstrualTimeOffWork + "_id").style.color = "red";
	document.getElementById(menstrualVariables.menstrualHowLong + "_id").style.color = "red";
	document.getElementById(menstrualVariables.menstrualHospitalization + "_id").style.color = "red";
	document.getElementById(menstrualVariables.menstrualPictoralScore + "_id").style.color = "red";

	document.getElementById(deliveryVariables.deliveryTotalScore + "_id").style.color = "red";
	document.getElementById(deliveryVariables.deliveryPrimary + "_id").style.color = "red";
	document.getElementById(deliveryVariables.deliveryHowLong + "_id").style.color = "red";
	document.getElementById(deliveryVariables.deliveryChangingPads + "_id").style.color = "red";
	document.getElementById(deliveryVariables.deliveryHospital + "_id").style.color = "red";
	document.getElementById(deliveryVariables.deliveryTreatment + "_id").style.color = "red";
	document.getElementById(deliveryVariables.deliveryTreatedHow + "_id").style.color = "red";

	document.getElementById(hematomaVariables.hematomaTotalScore + "_id").style.color = "red";
	document.getElementById(hematomaVariables.hematomaPrimary + "_id").style.color = "red";
	document.getElementById(hematomaVariables.hematomaType + "_id").style.color = "red";
	document.getElementById(hematomaVariables.hematomaTreatment + "_id").style.color = "red";
	document.getElementById(hematomaVariables.hematomaTreatedHow + "_id").style.color = "red";

	document.getElementById(hemarthrosisVariables.hemarthrosisTotalScore + "_id").style.color = "red";
	document.getElementById(hemarthrosisVariables.hemarthrosisPrimary + "_id").style.color = "red";
	document.getElementById(hemarthrosisVariables.hemarthrosisType + "_id").style.color = "red";
	document.getElementById(hemarthrosisVariables.hemarthrosisTreatment + "_id").style.color = "red";
	document.getElementById(hemarthrosisVariables.hemarthrosisTreatedHow + "_id").style.color = "red";

	document.getElementById(cnsVariables.cnsTotalScore + "_id").style.color = "red";
	document.getElementById(cnsVariables.cnsPrimary + "_id").style.color = "red";
	document.getElementById(cnsVariables.cnsType + "_id").style.color = "red";
	document.getElementById(cnsVariables.cnsSpecify + "_id").style.color = "red";
	document.getElementById(cnsVariables.cnsTreatment + "_id").style.color = "red";
	document.getElementById(cnsVariables.cnsTreatedHow + "_id").style.color = "red";

	document.getElementById(otherBleedingVariables.otherBleedingTotalScore + "_id").style.color = "red";
	document.getElementById(otherBleedingVariables.otherBleedingType + "_id").style.color = "red";
	document.getElementById(otherBleedingVariables.otherBleedingTreatment + "_id").style.color = "red";
	document.getElementById(otherBleedingVariables.otherBleedingTreatedHow + "_id").style.color = "red";
}
