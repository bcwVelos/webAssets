/**
 * 
 */

calcBMIVariables = {
	height: 'fld10050_143939_151092',
	heightCM: 'fld10050_143950_151103',
	weight: 'fld10050_143941_151094',
	BMI: 'fld10050_143943_151096',
}

var formStatus = document.getElementsByName('er_def_formstat');

$j(document).ready(function() {
	
	$j('[class^="convertCMBtn"]').click(function(event) {
		convertCM();
	});
	
	$j('[class^="calculateBtn"]').click(function(event) {
		calcBMI();
	});
});

function calcBMI() {

	var BMIValue = 0;

	var BMIHeight = document
			.getElementsByName(calcBMIVariables.height);
	var BMIWeight = document
			.getElementsByName(calcBMIVariables.weight);
	var BMIField = document
			.getElementsByName(calcBMIVariables.BMI);
			
	var heightValue = Number(BMIHeight[0].value);
	var weightValue = Number(BMIWeight[0].value);
	
	if (isNaN(heightValue) || isNaN(weightValue)) {
			alert ("Please check the values entered in the Height (m) and Weight (kg) fields to confirm they are correct.");
	} else {
		BMIValue = weightValue/(heightValue * heightValue);
	}
	
	BMIField[0].value = BMIValue.toFixed(1);
	
}

function convertCM() {

	var BMIValue = 0;

	var BMIHeight = document
			.getElementsByName(calcBMIVariables.height);
	var BMIHeightCM = document
			.getElementsByName(calcBMIVariables.heightCM);
			
	var heightValue = Number(BMIHeightCM[0].value);
	
	heightInM = heightValue/100;
	
	BMIHeight[0].value = heightInM;
	
}