var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var toothExtractionSectionsObj = new Array(toothExtractionSections);

toothExtractionSectionsObj[0] = {
	toothExtractionHeading : toothExtractionVariables.toothExtractionHeading.concat("_id"),
	toothExtractionAge : toothExtractionVariables.toothExtractionAge,
	toothExtractionWhatTeeth : toothExtractionVariables.toothExtractionWhatTeeth.concat("_span"),
	toothExtractionTreatmentGiven : toothExtractionVariables.toothExtractionTreatmentGiven.concat("_span"),
	toothExtractionTreatmentPrevention : toothExtractionVariables.toothExtractionTreatmentPrevention.concat("_span"),
	toothExtractionExcessiveBleeding : toothExtractionVariables.toothExtractionExcessiveBleeding.concat("_span"),
	toothExtractionLength : toothExtractionVariables.toothExtractionLength,
	toothExtractionTreatment : toothExtractionVariables.toothExtractionTreatment.concat("_span"),
	toothExtractionTreatedHow : toothExtractionVariables.toothExtractionTreatedHow.concat("_span"),
	addSectionBtn : toothExtractionVariables.toothExtractionAddBtn.concat("_id"),
	delSectionBtn : toothExtractionVariables.toothExtractionDeleteBtn.concat("_id")
}

for (var i = 1; i < toothExtractionSections; i++) {
	toothExtractionSectionsObj[i] = {
		toothExtractionHeading : String(generateNextID(toothExtractionSectionsObj[i-1].toothExtractionHeading).concat("_id")),
		toothExtractionAge : String(generateNextID(toothExtractionSectionsObj[i-1].toothExtractionAge)),
		toothExtractionWhatTeeth : String(generateNextID(toothExtractionSectionsObj[i-1].toothExtractionWhatTeeth).concat("_span")),
		toothExtractionTreatmentGiven : String(generateNextID(toothExtractionSectionsObj[i-1].toothExtractionTreatmentGiven).concat("_span")),
		toothExtractionTreatmentPrevention : String(generateNextID(toothExtractionSectionsObj[i-1].toothExtractionTreatmentPrevention).concat("_span")),
		toothExtractionExcessiveBleeding : String(generateNextID(toothExtractionSectionsObj[i-1].toothExtractionExcessiveBleeding).concat("_span")),
		toothExtractionLength : String(generateNextID(toothExtractionSectionsObj[i-1].toothExtractionLength)),
		toothExtractionTreatment : String(generateNextID(toothExtractionSectionsObj[i-1].toothExtractionTreatment).concat("_span")),
		toothExtractionTreatedHow : String(generateNextID(toothExtractionSectionsObj[i-1].toothExtractionTreatedHow).concat("_span")),
		addSectionBtn : String(generateNextID(toothExtractionSectionsObj[i-1].addSectionBtn).concat("_id")),
		delSectionBtn : String(generateNextID(toothExtractionSectionsObj[i-1].delSectionBtn).concat("_id"))
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
	var toothExtractionYes = document.getElementsByName(toothExtractionVariables.toothExtractionPrimary)[0];
	var toothExtractionNo = document.getElementsByName(toothExtractionVariables.toothExtractionPrimary)[1];
	
	// Hide the comments if primary question has answer of no
	if (!toothExtractionYes.checked) {
		$j("#" + toothExtractionVariables.toothExtractionHeading.concat("_id")).hide();
		$j("#" + toothExtractionVariables.toothExtractionComment.concat("_id")).hide();
		$j("#" + toothExtractionVariables.toothExtractionAddComment.concat("_id")).hide();
		$j("#" + toothExtractionSectionsObj[0].addSectionBtn).closest("table").hide();
	}
	
	// Add an event listener to show the comment if Yes is clicked
	toothExtractionYes.addEventListener('click', function() {
		$j("#" + toothExtractionVariables.toothExtractionHeading.concat("_id")).show();
		$j("#" + toothExtractionVariables.toothExtractionComment.concat("_id")).show();
		$j("#" + toothExtractionVariables.toothExtractionAddComment.concat("_id")).show();
		$j("#" + toothExtractionSectionsObj[0].addSectionBtn).closest("table").show();
	}, false);
	
	// Add an event listener to hide the comment if No is clicked
	toothExtractionNo.addEventListener('click', function() {
		$j("#" + toothExtractionVariables.toothExtractionHeading.concat("_id")).hide();
		$j("#" + toothExtractionVariables.toothExtractionComment.concat("_id")).hide();
		$j("#" + toothExtractionVariables.toothExtractionAddComment.concat("_id")).hide();
		$j("#" + toothExtractionSectionsObj[0].addSectionBtn).closest("table").hide();
	}, false);
	
	toothExtractionYes.addEventListener('dblclick', function() {
		$j("#" + toothExtractionVariables.toothExtractionHeading.concat("_id")).hide();
		$j("#" + toothExtractionVariables.toothExtractionComment.concat("_id")).hide();
		$j("#" + toothExtractionVariables.toothExtractionAddComment.concat("_id")).hide();
		$j("#" + toothExtractionSectionsObj[0].addSectionBtn).closest("table").hide();
	}, false);
	
//	/** BEGIN TEST DATA  **/
//	$j("#" + toothExtractionSectionsObj[0].toothExtractionAge).val("15");
//	$j("#" + toothExtractionSectionsObj[1].toothExtractionAge).val("18");
//	/** END TEST DATA  **/
	
	// hide the delete Button in the first section - it should never be seen
	$j("#" + toothExtractionSectionsObj[0].delSectionBtn).hide();
	
    // Start the for loop in the second section because the first section
    // will always display.
	for ( var i = 1; i < toothExtractionSections; i++) {

		//Check if the Age field has data in it
		//If this is True - assume that there are values for all columns and check the next row.
		if ($j("#" + toothExtractionSectionsObj[i].toothExtractionAge).val() != "")
		{
			//Hide the add button in the previous row. 
			$j("#" + toothExtractionSectionsObj[i-1].addSectionBtn).hide();
			$j("#" + toothExtractionSectionsObj[i-1].delSectionBtn).hide();
		
			if(i == (toothExtractionSections - 1)){
				$j("#" + toothExtractionSectionsObj[i].addSectionBtn).hide();
			}
		
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			$j("#" + toothExtractionSectionsObj[i-1].addSectionBtn).show();
			if((i-1) > 0){
				$j("#" + toothExtractionSectionsObj[i-1].delSectionBtn).show();
			}
		
			//Hide this section.
			$j("#" + toothExtractionSectionsObj[i].toothExtractionHeading).closest("table").hide();
			$j("#" + toothExtractionSectionsObj[i].toothExtractionAge).closest("table").hide();
			$j("#" + toothExtractionSectionsObj[i].toothExtractionWhatTeeth).closest("table").hide();
			$j("#" + toothExtractionSectionsObj[i].toothExtractionWhatTeeth).parents("table").hide();
			$j("#" + toothExtractionSectionsObj[i].toothExtractionTreatmentGiven).closest("table").hide();
			$j("#" + toothExtractionSectionsObj[i].toothExtractionTreatmentGiven).parents("table").hide();
			$j("#" + toothExtractionSectionsObj[i].toothExtractionTreatmentPrevention).closest("table").hide();
			$j("#" + toothExtractionSectionsObj[i].toothExtractionTreatmentPrevention).parents("table").hide();
			$j("#" + toothExtractionSectionsObj[i].toothExtractionExcessiveBleeding).closest("table").hide();
			$j("#" + toothExtractionSectionsObj[i].toothExtractionExcessiveBleeding).parents("table").hide();
			$j("#" + toothExtractionSectionsObj[i].toothExtractionLength).closest("table").hide();
			$j("#" + toothExtractionSectionsObj[i].toothExtractionTreatment).closest("table").hide();
			$j("#" + toothExtractionSectionsObj[i].toothExtractionTreatment).parents("table").hide();
			$j("#" + toothExtractionSectionsObj[i].toothExtractionTreatedHow).closest("table").hide();
			$j("#" + toothExtractionSectionsObj[i].toothExtractionTreatedHow).parents("table").hide();
			$j("#" + toothExtractionSectionsObj[i].addSectionBtn).closest("table").hide();
		}
	}
	
	$j(".addBtnTE").click(function() {
		var parentLabelElement = $j(this).parent("label");
		var labelId = $j(parentLabelElement).attr("id");

		var x;
		var i = 0;

		while (!Boolean(x)) {
			var rowName = toothExtractionSectionsObj[i].addSectionBtn;
			if (rowName === labelId) {
				x = "True";
				//Hide the delete and add buttons in this row
				if(i < toothExtractionSectionsObj.length) {
					if(i != (toothExtractionSectionsObj.length-1)) {
						$j("#" + toothExtractionSectionsObj[i].delSectionBtn).hide();
					}
					$j("#" + toothExtractionSectionsObj[i].addSectionBtn).hide();

				}
				//Show all values in row where the add button was selected
				$j("#" + toothExtractionSectionsObj[i+1].toothExtractionHeading).closest("table").show();
				$j("#" + toothExtractionSectionsObj[i+1].toothExtractionAge).closest("table").show();
				$j("#" + toothExtractionSectionsObj[i+1].toothExtractionWhatTeeth).closest("table").show();
				$j("#" + toothExtractionSectionsObj[i+1].toothExtractionWhatTeeth).parents("table").show();
				$j("#" + toothExtractionSectionsObj[i+1].toothExtractionTreatmentGiven).closest("table").show();
				$j("#" + toothExtractionSectionsObj[i+1].toothExtractionTreatmentGiven).parents("table").show();
//				$j("#" + toothExtractionSectionsObj[i+1].toothExtractionTreatmentPrevention).closest("table").show();
//				$j("#" + toothExtractionSectionsObj[i+1].toothExtractionTreatmentPrevention).parents("table").show();
				$j("#" + toothExtractionSectionsObj[i+1].toothExtractionExcessiveBleeding).closest("table").show();
				$j("#" + toothExtractionSectionsObj[i+1].toothExtractionExcessiveBleeding).parents("table").show();
//				$j("#" + toothExtractionSectionsObj[i+1].toothExtractionBleedingLength).closest("table").show();
//				$j("#" + toothExtractionSectionsObj[i+1].toothExtractionBleedingTreatment).closest("table").show();
//				$j("#" + toothExtractionSectionsObj[i+1].toothExtractionBleedingTreatment).parents("table").show();
//				$j("#" + toothExtractionSectionsObj[i+1].toothExtractionBleedingTreatmentGiven).closest("table").show();
//				$j("#" + toothExtractionSectionsObj[i+1].toothExtractionBleedingTreatmentGiven).parents("table").show();
				$j("#" + toothExtractionSectionsObj[i+1].addSectionBtn).closest("table").show();
				if((i+1) === (toothExtractionSectionsObj.length -1)) {
					$j("#" + toothExtractionSectionsObj[i+1].addSectionBtn).hide();
				}
			} 
				i++;
		}
	});
	
	$j(".deleteBtnTE").click(function() {
		var parentLabelElement = $j(this).parent("label");
		var labelId = $j(parentLabelElement).attr("id");

		var y;
		var i = 0;
		var listUncheck;

		while (!Boolean(y)) {
			var rowName = toothExtractionSectionsObj[i].delSectionBtn;
			if (rowName === labelId) {
				y = "True";

				//Remove values from current row and hide the row
				$j("#" + toothExtractionSectionsObj[i].toothExtractionHeading).closest("table").hide();
				
				$j("#" + toothExtractionSectionsObj[i].toothExtractionAge).val("");
				$j("#" + toothExtractionSectionsObj[i].toothExtractionAge).closest("table").hide();

				var b = toothExtractionSectionsObj[i].toothExtractionWhatTeeth.indexOf("_span");
				listUncheck = document.getElementsByName(toothExtractionSectionsObj[i].toothExtractionWhatTeeth.substring(0, b));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + toothExtractionSectionsObj[i].toothExtractionWhatTeeth).closest("table").hide();
				$j("#" + toothExtractionSectionsObj[i].toothExtractionWhatTeeth).parents("table").hide();

				var c = toothExtractionSectionsObj[i].toothExtractionTreatmentGiven.indexOf("_span");
				listUncheck = document.getElementsByName(toothExtractionSectionsObj[i].toothExtractionTreatmentGiven.substring(0, c));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + toothExtractionSectionsObj[i].toothExtractionTreatmentGiven).closest("table").hide();
				$j("#" + toothExtractionSectionsObj[i].toothExtractionTreatmentGiven).parents("table").hide();

				var d = toothExtractionSectionsObj[i].toothExtractionTreatmentPrevention.indexOf("_span");
				listUncheck = document.getElementsByName(toothExtractionSectionsObj[i].toothExtractionTreatmentPrevention.substring(0, d));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + toothExtractionSectionsObj[i].toothExtractionTreatmentPrevention).closest("table").hide();
				$j("#" + toothExtractionSectionsObj[i].toothExtractionTreatmentPrevention).parents("table").hide();
				
				var e = toothExtractionSectionsObj[i].toothExtractionExcessiveBleeding.indexOf("_span");
				listUncheck = document.getElementsByName(toothExtractionSectionsObj[i].toothExtractionExcessiveBleeding.substring(0, e));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + toothExtractionSectionsObj[i].toothExtractionExcessiveBleeding).closest("table").hide();
				$j("#" + toothExtractionSectionsObj[i].toothExtractionExcessiveBleeding).parents("table").hide();
				
				$j("#" + toothExtractionSectionsObj[i].toothExtractionLength).val("");
				$j("#" + toothExtractionSectionsObj[i].toothExtractionLength).closest("table").hide();
				
				var g = toothExtractionSectionsObj[i].toothExtractionTreatment.indexOf("_span");
				listUncheck = document.getElementsByName(toothExtractionSectionsObj[i].toothExtractionTreatment.substring(0, g));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + toothExtractionSectionsObj[i].toothExtractionTreatment).closest("table").hide();
				$j("#" + toothExtractionSectionsObj[i].toothExtractionTreatment).parents("table").hide();
				
				var h = toothExtractionSectionsObj[i].toothExtractionTreatedHow.indexOf("_span");
				listUncheck = document.getElementsByName(toothExtractionSectionsObj[i].toothExtractionTreatedHow.substring(0, h));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + toothExtractionSectionsObj[i].toothExtractionTreatedHow).closest("table").hide();
				$j("#" + toothExtractionSectionsObj[i].toothExtractionTreatedHow).parents("table").hide();
				
				$j("#" + toothExtractionSectionsObj[i].addSectionBtn).closest("table").hide();
				
				//show the Add and Delete Button on the previous row
				$j("#" + toothExtractionSectionsObj[i-1].addSectionBtn).show();
				if((i-1) > 0) {
					$j("#" + toothExtractionSectionsObj[i-1].delSectionBtn).show();
				}
			}
			i++;
		}
	});
	
	var a;
	var fieldID;
	
	for (var i = 1; i < toothExtractionSections; i++) {
	//Get the Yes/No element names for the appropriate field
		a = toothExtractionSectionsObj[i].toothExtractionTreatmentGiven.indexOf("_span");
		fieldID = toothExtractionSectionsObj[i].toothExtractionTreatmentGiven.substring(0, a);
		var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
		var treatmentPreventionNo = document.getElementsByName(fieldID)[1];
	
		// Hide the comments if primary question has answer of no
		if (!treatmentPreventionYes.checked) {
			$j("#" + toothExtractionSectionsObj[i].toothExtractionTreatmentPrevention).closest("table").hide();
			$j("#" + toothExtractionSectionsObj[i].toothExtractionTreatmentPrevention).parents("table").hide();
		}	
		
		$j(treatmentPreventionYes).click(showChildTreamentPreventionTooth(i)); {}
		$j(treatmentPreventionNo).click(hideChildTreamentPreventionTooth(i)); {}
	}
	
	for (var i = 1; i < toothExtractionSections; i++) {
		a = toothExtractionSectionsObj[i].toothExtractionExcessiveBleeding.indexOf("_span");
		fieldID = toothExtractionSectionsObj[i].toothExtractionExcessiveBleeding.substring(0, a);
		var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
		var excessiveBleedingNo = document.getElementsByName(fieldID)[1];
	
		// Hide the comments if primary question has answer of no
		if (!excessiveBleedingYes.checked) {
			$j("#" + toothExtractionSectionsObj[i].toothExtractionLength).closest("table").hide();
			$j("#" + toothExtractionSectionsObj[i].toothExtractionTreatment).closest("table").hide();
			$j("#" + toothExtractionSectionsObj[i].toothExtractionTreatment).parents("table").hide();
		}
	
		$j(excessiveBleedingYes).click(showChildExcessiveBleedingTooth(i)); {}
		$j(excessiveBleedingNo).click(hideChildExcessiveBleedingTooth(i)); {}
	}
	
	for (var i = 1; i < toothExtractionSections; i++) {
		a = toothExtractionSectionsObj[i].toothExtractionTreatment.indexOf("_span");
		fieldID = toothExtractionSectionsObj[i].toothExtractionTreatment.substring(0, a);
		var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
		var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];
	
		// Hide the comments if primary question has answer of no
		if (!bleedingTreatmentYes.checked) {
			$j("#" + toothExtractionSectionsObj[i].toothExtractionTreatedHow).closest("table").hide();
			$j("#" + toothExtractionSectionsObj[i].toothExtractionTreatedHow).parents("table").hide();
		}
		
		$j(bleedingTreatmentYes).click(showChildTreatmentTooth(i)); {}
		$j(bleedingTreatmentNo).click(hideChildTreamentTooth(i)); {}
	}
});

function showChildTreamentPreventionTooth(j) {
	return function(event) {
		$j("#" + toothExtractionSectionsObj[j].toothExtractionTreatmentPrevention).closest("table").show();
		$j("#" + toothExtractionSectionsObj[j].toothExtractionTreatmentPrevention).parents("table").show();
	};
}

function hideChildTreamentPreventionTooth(j) {
	return function(event) {
		$j("#" + toothExtractionSectionsObj[j].toothExtractionTreatmentPrevention).closest("table").hide();
		$j("#" + toothExtractionSectionsObj[j].toothExtractionTreatmentPrevention).parents("table").hide();
	};
}

function showChildExcessiveBleedingTooth(j) {
	return function(event) {
		$j("#" + toothExtractionSectionsObj[j].toothExtractionLength).closest("table").show();
		$j("#" + toothExtractionSectionsObj[j].toothExtractionTreatment).closest("table").show();
		$j("#" + toothExtractionSectionsObj[j].toothExtractionTreatment).parents("table").show();
	};
}

function hideChildExcessiveBleedingTooth(j) {
	return function(event) {
		$j("#" + toothExtractionSectionsObj[j].toothExtractionLength).closest("table").hide();
		$j("#" + toothExtractionSectionsObj[j].toothExtractionTreatment).closest("table").hide();
		$j("#" + toothExtractionSectionsObj[j].toothExtractionTreatment).parents("table").hide();
	};
}

function showChildTreatmentTooth(j) {
	return function(event) {
		$j("#" + toothExtractionSectionsObj[j].toothExtractionTreatedHow).closest("table").show();
		$j("#" + toothExtractionSectionsObj[j].toothExtractionTreatedHow).parents("table").show();
	};
}

function hideChildTreamentTooth(j) {
	return function(event) {
		$j("#" + toothExtractionSectionsObj[j].toothExtractionTreatedHow).closest("table").hide();
		$j("#" + toothExtractionSectionsObj[j].toothExtractionTreatedHow).parents("table").hide();
	};
}