/**
 * 
 */

calcBMIVariables = {
	height: 'fld10050_131124_136056',
	weight: 'fld10050_131125_136057',
	BMI: 'fld10050_131126_136058',
}

var formStatus = document.getElementsByName('er_def_formstat');

$j(document).ready(function() {
	
	$j('.[class^="calculateBtn"]').click(function(event) {
		calcBMI();
	});
	
	$j('.[id^="submit_btn"]').click(function(event) {
		calcBMI();
	});
});

function calcBMI() {
	alert("Hello");

	var BMIValue = 0;

	var BMIHeight = document
			.getElementsByName(calcBMIVariables.height);
	var BMIWeight = document
			.getElementsByName(calcBMIVariables.weight);
	var BMIField = document
			.getElementsByName(calcBMIVariables.BMI);
			
	var heightValue = Number(BMIHeight[0].value);
	var weightValue = Number(BMIWeight[0].value);
	BMIField[0].value = heightValue + weightValue;
	
	alert("Hello");
}