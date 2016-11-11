var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var deliverySectionsObj = new Array(deliverySections);

deliverySectionsObj[0] = {
	deliveryHeading : deliveryVariables.deliveryHeading.concat("_id"),
	deliveryAge : deliveryVariables.deliveryAge,
	deliveryType : deliveryVariables.deliveryType.concat("_span"),
	deliveryTreatmentGiven : deliveryVariables.deliveryTreatmentGiven.concat("_span"),
	deliveryTreatmentPrevention : deliveryVariables.deliveryTreatmentPrevention.concat("_span"),
	deliveryExcessiveBleeding : deliveryVariables.deliveryExcessiveBleeding.concat("_span"),
	deliveryTime : deliveryVariables.deliveryTime.concat("_span"),
	deliveryTreatment : deliveryVariables.deliveryTreatment.concat("_span"),
	deliveryTreatedHow : deliveryVariables.deliveryTreatedHow.concat("_span"),
	deliveryHospital : deliveryVariables.deliveryHospital.concat("_span"),
	addSectionBtn : deliveryVariables.deliveryAddBtn.concat("_id"),
	delSectionBtn : deliveryVariables.deliveryDeleteBtn.concat("_id")
}

for (var i = 1; i < deliverySections; i++) {
	deliverySectionsObj[i] = {
		deliveryHeading : String(generateNextID(deliverySectionsObj[i-1].deliveryHeading).concat("_id")),
		deliveryAge : String(generateNextID(deliverySectionsObj[i-1].deliveryAge)),
		deliveryType : String(generateNextID(deliverySectionsObj[i-1].deliveryType).concat("_span")),
		deliveryTreatmentGiven : String(generateNextID(deliverySectionsObj[i-1].deliveryTreatmentGiven).concat("_span")),
		deliveryTreatmentPrevention : String(generateNextID(deliverySectionsObj[i-1].deliveryTreatmentPrevention).concat("_span")),
		deliveryExcessiveBleeding : String(generateNextID(deliverySectionsObj[i-1].deliveryExcessiveBleeding).concat("_span")),
		deliveryTime : String(generateNextID(deliverySectionsObj[i-1].deliveryTime).concat("_span")),
		deliveryTreatment : String(generateNextID(deliverySectionsObj[i-1].deliveryTreatment).concat("_span")),
		deliveryTreatedHow : String(generateNextID(deliverySectionsObj[i-1].deliveryTreatedHow).concat("_span")),
		deliveryHospital : String(generateNextID(deliverySectionsObj[i-1].deliveryHospital).concat("_span")),
		addSectionBtn : String(generateNextID(deliverySectionsObj[i-1].addSectionBtn).concat("_id")),
		delSectionBtn : String(generateNextID(deliverySectionsObj[i-1].delSectionBtn).concat("_id"))
	}
}

function generateNextID(currentID) {
	fieldElements = currentID.split("_");
	firstIncrement = Number(fieldElements[1]) + 1;
	secondIncrement = Number(fieldElements[2]) + 1;
	nextID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
	return nextID;
}

$j(document).ready(function() {
	var deliveryYes = document.getElementsByName(deliveryVariables.deliveryPrimary)[0];
	var deliveryNo = document.getElementsByName(deliveryVariables.deliveryPrimary)[1];
	
	// Hide the comments if primary question has answer of no
	if (!deliveryYes.checked) {
		$j("#" + deliveryVariables.deliveryHeading.concat("_id")).hide();
		$j("#" + deliveryVariables.deliveryAddComment.concat("_id")).hide();
		$j("#" + deliverySectionsObj[0].addSectionBtn).closest("table").hide();
	}
	
	// Add an event listener to show the comment if Yes is clicked
	deliveryYes.addEventListener('click', function() {
		$j("#" + deliveryVariables.deliveryHeading.concat("_id")).show();
		$j("#" + deliveryVariables.deliveryAddComment.concat("_id")).show();
		$j("#" + deliverySectionsObj[0].addSectionBtn).closest("table").show();
	}, false);
	
	// Add an event listener to hide the comment if No is clicked
	deliveryNo.addEventListener('click', function() {
		$j("#" + deliveryVariables.deliveryHeading.concat("_id")).hide();
		$j("#" + deliveryVariables.deliveryAddComment.concat("_id")).hide();
		$j("#" + deliverySectionsObj[0].addSectionBtn).closest("table").hide();
	}, false);
	
	deliveryYes.addEventListener('dblclick', function() {
		$j("#" + deliveryVariables.deliveryHeading.concat("_id")).hide();
		$j("#" + deliveryVariables.deliveryAddComment.concat("_id")).hide();
		$j("#" + deliverySectionsObj[0].addSectionBtn).closest("table").hide();
	}, false);

//	/** BEGIN TEST DATA  **/
//	$j("#" + deliverySectionsObj[0].deliveryAge).val("15");
//	$j("#" + deliverySectionsObj[1].deliveryAge).val("18");
//	/** END TEST DATA  **/
		
	// hide the delete Button in the first section - it should never be seen
	$j("#" + deliverySectionsObj[0].delSectionBtn).hide();
	
    // Start the for loop in the second section because the first section
    // will always display.
	for ( var i = 1; i < deliverySections; i++) {

		//Check if the Age field has data in it
		//If this is True - assume that there are values for all columns and check the next row.
		if ($j("#" + deliverySectionsObj[i].deliveryAge).val() != "")
		{
			//Hide the add button in the previous row. 
			$j("#" + deliverySectionsObj[i-1].addSectionBtn).hide();
			$j("#" + deliverySectionsObj[i-1].delSectionBtn).hide();
		
			if(i == (deliverySections - 1)){
				$j("#" + deliverySectionsObj[i].addSectionBtn).hide();
			}
		
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			$j("#" + deliverySectionsObj[i-1].addSectionBtn).show();
			if((i-1) > 0){
				$j("#" + deliverySectionsObj[i-1].delSectionBtn).show();
			}
		
			//Hide this section.
			$j("#" + deliverySectionsObj[i].deliveryHeading).closest("table").hide();
			$j("#" + deliverySectionsObj[i].deliveryAge).closest("table").hide();
			$j("#" + deliverySectionsObj[i].deliveryType).closest("table").hide();
			$j("#" + deliverySectionsObj[i].deliveryType).parents("table").hide();
			$j("#" + deliverySectionsObj[i].deliveryTreatmentGiven).closest("table").hide();
			$j("#" + deliverySectionsObj[i].deliveryTreatmentGiven).parents("table").hide();
			$j("#" + deliverySectionsObj[i].deliveryTreatmentPrevention).closest("table").hide();
			$j("#" + deliverySectionsObj[i].deliveryTreatmentPrevention).parents("table").hide();
			$j("#" + deliverySectionsObj[i].deliveryExcessiveBleeding).closest("table").hide();
			$j("#" + deliverySectionsObj[i].deliveryExcessiveBleeding).parents("table").hide();
			$j("#" + deliverySectionsObj[i].deliveryTime).closest("table").hide();
			$j("#" + deliverySectionsObj[i].deliveryTime).parents("table").hide();
			$j("#" + deliverySectionsObj[i].deliveryTreatment).closest("table").hide();
			$j("#" + deliverySectionsObj[i].deliveryTreatment).parents("table").hide();
			$j("#" + deliverySectionsObj[i].deliveryTreatedHow).closest("table").hide();
			$j("#" + deliverySectionsObj[i].deliveryTreatedHow).parents("table").hide();
			$j("#" + deliverySectionsObj[i].deliveryHospital).closest("table").hide();
			$j("#" + deliverySectionsObj[i].deliveryHospital).parents("table").hide();
			$j("#" + deliverySectionsObj[i].addSectionBtn).closest("table").hide();
		}
	}

	$j(".addBtndelivery").click(function() {
		var parentLabelElement = $j(this).parent("label");
		var labelId = $j(parentLabelElement).attr("id");

		var x;
		var i = 0;

		while (!Boolean(x)) {
			var rowName = deliverySectionsObj[i].addSectionBtn;
			if (rowName === labelId) {
				x = "True";
				//Hide the delete and add buttons in this row
				if(i < deliverySectionsObj.length) {
					if(i != (deliverySectionsObj.length-1)) {
						$j("#" + deliverySectionsObj[i].delSectionBtn).hide();
					}
					$j("#" + deliverySectionsObj[i].addSectionBtn).hide();

				}
				//Show all values in row where the add button was selected
				$j("#" + deliverySectionsObj[i+1].deliveryHeading).closest("table").show();
				$j("#" + deliverySectionsObj[i+1].deliveryAge).closest("table").show();
				$j("#" + deliverySectionsObj[i+1].deliveryType).closest("table").show();
				$j("#" + deliverySectionsObj[i+1].deliveryType).parents("table").show();
				$j("#" + deliverySectionsObj[i+1].deliveryTreatmentGiven).closest("table").show();
				$j("#" + deliverySectionsObj[i+1].deliveryTreatmentGiven).parents("table").show();
				$j("#" + deliverySectionsObj[i+1].deliveryExcessiveBleeding).closest("table").show();
				$j("#" + deliverySectionsObj[i+1].deliveryExcessiveBleeding).parents("table").show();
				$j("#" + deliverySectionsObj[i+1].deliveryTreatment).closest("table").show();
				$j("#" + deliverySectionsObj[i+1].deliveryTreatment).parents("table").show();
				$j("#" + deliverySectionsObj[i+1].addSectionBtn).closest("table").show();
			} 
				i++;
		}
	});

	$j(".deleteBtndelivery").click(function() {
		var parentLabelElement = $j(this).parent("label");
		var labelId = $j(parentLabelElement).attr("id");

		var y;
		var i = 0;
		var listUncheck;

		while (!Boolean(y)) {
			var rowName = deliverySectionsObj[i].delSectionBtn;
			if (rowName === labelId) {
				y = "True";
				
				//Remove values from current row and hide the row
				$j("#" + deliverySectionsObj[i].deliveryHeading).closest("table").hide();
				
				$j("#" + deliverySectionsObj[i].deliveryAge).val("");
				$j("#" + deliverySectionsObj[i].deliveryAge).closest("table").hide();

				var b = deliverySectionsObj[i].deliveryType.indexOf("_span");
				listUncheck = document.getElementsByName(deliverySectionsObj[i].deliveryType.substring(0, b));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + deliverySectionsObj[i].deliveryType).closest("table").hide();
				$j("#" + deliverySectionsObj[i].deliveryType).parents("table").hide();

				var d = deliverySectionsObj[i].deliveryTreatmentGiven.indexOf("_span");
				listUncheck = document.getElementsByName(deliverySectionsObj[i].deliveryTreatmentGiven.substring(0, d));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + deliverySectionsObj[i].deliveryTreatmentGiven).closest("table").hide();
				$j("#" + deliverySectionsObj[i].deliveryTreatmentGiven).parents("table").hide();

				var e = deliverySectionsObj[i].deliveryTreatmentPrevention.indexOf("_span");
				listUncheck = document.getElementsByName(deliverySectionsObj[i].deliveryTreatmentPrevention.substring(0, e));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + deliverySectionsObj[i].deliveryTreatmentPrevention).closest("table").hide();
				$j("#" + deliverySectionsObj[i].deliveryTreatmentPrevention).parents("table").hide();

				var f = deliverySectionsObj[i].deliveryExcessiveBleeding.indexOf("_span");
				listUncheck = document.getElementsByName(deliverySectionsObj[i].deliveryExcessiveBleeding.substring(0, f));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + deliverySectionsObj[i].deliveryExcessiveBleeding).closest("table").hide();
				$j("#" + deliverySectionsObj[i].deliveryExcessiveBleeding).parents("table").hide();
				
				var g = deliverySectionsObj[i].deliveryTime.indexOf("_span");
				listUncheck = document.getElementsByName(deliverySectionsObj[i].deliveryTime.substring(0, g));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + deliverySectionsObj[i].deliveryTime).closest("table").hide();
				$j("#" + deliverySectionsObj[i].deliveryTime).parents("table").hide();
				
				var h = deliverySectionsObj[i].deliveryTreatment.indexOf("_span");
				listUncheck = document.getElementsByName(deliverySectionsObj[i].deliveryTreatment.substring(0, h));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + deliverySectionsObj[i].deliveryTreatment).closest("table").hide();
				$j("#" + deliverySectionsObj[i].deliveryTreatment).parents("table").hide();
				
				var l = deliverySectionsObj[i].deliveryTreatedHow.indexOf("_span");
				listUncheck = document.getElementsByName(deliverySectionsObj[i].deliveryTreatedHow.substring(0, l));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + deliverySectionsObj[i].deliveryTreatedHow).closest("table").hide();
				$j("#" + deliverySectionsObj[i].deliveryTreatedHow).parents("table").hide();
				
				var m = deliverySectionsObj[i].deliveryHospital.indexOf("_span");
				listUncheck = document.getElementsByName(deliverySectionsObj[i].deliveryHospital.substring(0, m));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + deliverySectionsObj[i].deliveryHospital).closest("table").hide();
				$j("#" + deliverySectionsObj[i].deliveryHospital).parents("table").hide();

				$j("#" + deliverySectionsObj[i].addSectionBtn).closest("table").hide();
				
				//show the Add and Delete Button on the previous row
				$j("#" + deliverySectionsObj[i-1].addSectionBtn).show();
				if((i-1) > 0) {
					$j("#" + deliverySectionsObj[i-1].delSectionBtn).show();
				}
			}
				i++;
		}
	});
	
	var a;
	var fieldID;

	for (var i = 1; i < deliverySections; i++) {
	//Get the Yes/No element names for the appropriate field
		a = deliverySectionsObj[i].deliveryTreatmentGiven.indexOf("_span");
		fieldID = deliverySectionsObj[i].deliveryTreatmentGiven.substring(0, a);
		var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
		var treatmentPreventionNo = document.getElementsByName(fieldID)[1];
	
		// Hide the comments if primary question has answer of no
		if (!treatmentPreventionYes.checked) {
			$j("#" + deliverySectionsObj[i].deliveryTreatmentPrevention).closest("table").hide();
			$j("#" + deliverySectionsObj[i].deliveryTreatmentPrevention).parents("table").hide();
		}	
		
		$j(treatmentPreventionYes).click(showChildTreamentPreventiondelivery(i)); {}
		$j(treatmentPreventionNo).click(hideChildTreamentPreventiondelivery(i)); {}
	}
		
	for (var i = 1; i < deliverySections; i++) {
		a = deliverySectionsObj[i].deliveryExcessiveBleeding.indexOf("_span");
		fieldID = deliverySectionsObj[i].deliveryExcessiveBleeding.substring(0, a);
		var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
		var excessiveBleedingNo = document.getElementsByName(fieldID)[1];
	
		// Hide the comments if primary question has answer of no
		if (!excessiveBleedingYes.checked) {
			$j("#" + deliverySectionsObj[i].deliveryTime).closest("table").hide();
			$j("#" + deliverySectionsObj[i].deliveryTime).parents("table").hide();
		}
	
		$j(excessiveBleedingYes).click(showChildExcessiveBleedingdelivery(i)); {}
		$j(excessiveBleedingNo).click(hideChildExcessiveBleedingdelivery(i)); {}
	}
	
	for (var i = 1; i < deliverySections; i++) {
		a = deliverySectionsObj[i].deliveryTreatment.indexOf("_span");
		fieldID = deliverySectionsObj[i].deliveryTreatment.substring(0, a);
		var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
		var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];
	
		// Hide the comments if primary question has answer of no
		if (!bleedingTreatmentYes.checked) {
			$j("#" + deliverySectionsObj[i].deliveryTreatedHow).closest("table").hide();
			$j("#" + deliverySectionsObj[i].deliveryTreatedHow).parents("table").hide();
			$j("#" + deliverySectionsObj[i].deliveryHospital).closest("table").hide();
			$j("#" + deliverySectionsObj[i].deliveryHospital).parents("table").hide();
		}
		
		$j(bleedingTreatmentYes).click(showChildTreatmentdelivery(i)); {}
		$j(bleedingTreatmentNo).click(hideChildTreamentdelivery(i)); {}
	}
});

function showChildTreamentPreventiondelivery(j) {
	return function(event) {
		$j("#" + deliverySectionsObj[j].deliveryTreatmentPrevention).closest("table").show();
		$j("#" + deliverySectionsObj[j].deliveryTreatmentPrevention).parents("table").show();
	};
}

function hideChildTreamentPreventiondelivery(j) {
	return function(event) {
		$j("#" + deliverySectionsObj[j].deliveryTreatmentPrevention).closest("table").hide();
		$j("#" + deliverySectionsObj[j].deliveryTreatmentPrevention).parents("table").hide();
	};
}

function showChildExcessiveBleedingdelivery(j) {
	return function(event) {
		$j("#" + deliverySectionsObj[j].deliveryTime).closest("table").show();
		$j("#" + deliverySectionsObj[j].deliveryTime).parents("table").show();
	};
}

function hideChildExcessiveBleedingdelivery(j) {
	return function(event) {
		$j("#" + deliverySectionsObj[j].deliveryTime).closest("table").hide();
		$j("#" + deliverySectionsObj[j].deliveryTime).parents("table").hide();
	};
}

function showChildTreatmentdelivery(j) {
	return function(event) {
		$j("#" + deliverySectionsObj[j].deliveryTreatedHow).closest("table").show();
		$j("#" + deliverySectionsObj[j].deliveryTreatedHow).parents("table").show();
		$j("#" + deliverySectionsObj[j].deliveryHospital).closest("table").show();
		$j("#" + deliverySectionsObj[j].deliveryHospital).parents("table").show();
	};
}

function hideChildTreamentdelivery(j) {
	return function(event) {
		$j("#" + deliverySectionsObj[j].deliveryTreatedHow).closest("table").hide();
		$j("#" + deliverySectionsObj[j].deliveryTreatedHow).parents("table").hide();
		$j("#" + deliverySectionsObj[j].deliveryHospital).closest("table").hide();
		$j("#" + deliverySectionsObj[j].deliveryHospital).parents("table").hide();
	};
}
