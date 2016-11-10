var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var surgerySectionsObj = new Array(surgerySections);

surgerySectionsObj[0] = {
	surgeryHeading : surgeryVariables.surgeryHeading.concat("_id"),
	surgeryAge : surgeryVariables.surgeryAge,
	surgeryType : surgeryVariables.surgeryType.concat("_span"),
	surgeryTypeDescribe : surgeryVariables.surgeryTypeDescribe,
	surgeryTreatmentGiven : surgeryVariables.surgeryTreatmentGiven.concat("_span"),
	surgeryTreatmentPrevention : surgeryVariables.surgeryTreatmentPrevention.concat("_span"),
	surgeryExcessiveBleeding : surgeryVariables.surgeryExcessiveBleeding.concat("_span"),
	surgeryTime : surgeryVariables.surgeryTime.concat("_span"),
	surgeryTreatment : surgeryVariables.surgeryTreatment.concat("_span"),
	surgeryTreatedHow : surgeryVariables.surgeryTreatedHow.concat("_span"),
	addSectionBtn : surgeryVariables.surgeryAddBtn.concat("_id"),
	delSectionBtn : surgeryVariables.surgeryDeleteBtn.concat("_id")
}

for (var i = 1; i < surgerySections; i++) {
	surgerySectionsObj[i] = {
		surgeryHeading : String(generateNextID(surgerySectionsObj[i-1].surgeryHeading).concat("_id")),
		surgeryAge : String(generateNextID(surgerySectionsObj[i-1].surgeryAge)),
		surgeryType : String(generateNextID(surgerySectionsObj[i-1].surgeryType).concat("_span")),
		surgeryTypeDescribe : String(generateNextID(surgerySectionsObj[i-1].surgeryTypeDescribe)),
		surgeryTreatmentGiven : String(generateNextID(surgerySectionsObj[i-1].surgeryTreatmentGiven).concat("_span")),
		surgeryTreatmentPrevention : String(generateNextID(surgerySectionsObj[i-1].surgeryTreatmentPrevention).concat("_span")),
		surgeryExcessiveBleeding : String(generateNextID(surgerySectionsObj[i-1].surgeryExcessiveBleeding).concat("_span")),
		surgeryTime : String(generateNextID(surgerySectionsObj[i-1].surgeryTime).concat("_span")),
		surgeryTreatment : String(generateNextID(surgerySectionsObj[i-1].surgeryTreatment).concat("_span")),
		surgeryTreatedHow : String(generateNextID(surgerySectionsObj[i-1].surgeryTreatedHow).concat("_span")),
		addSectionBtn : String(generateNextID(surgerySectionsObj[i-1].addSectionBtn).concat("_id")),
		delSectionBtn : String(generateNextID(surgerySectionsObj[i-1].delSectionBtn).concat("_id"))
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
	var surgeryYes = document.getElementsByName(surgeryVariables.surgeryPrimary)[0];
	var surgeryNo = document.getElementsByName(surgeryVariables.surgeryPrimary)[1];
	
	// Hide the comments if primary question has answer of no
	if (!surgeryYes.checked) {
		$j("#" + surgeryVariables.surgeryHeading.concat("_id")).hide();
		$j("#" + surgeryVariables.surgeryAddComment.concat("_id")).hide();
		$j("#" + surgerySectionsObj[0].addSectionBtn).closest("table").hide();
	}
	
	// Add an event listener to show the comment if Yes is clicked
	surgeryYes.addEventListener('click', function() {
		$j("#" + surgeryVariables.surgeryHeading.concat("_id")).show();
		$j("#" + surgeryVariables.surgeryAddComment.concat("_id")).show();
		$j("#" + surgerySectionsObj[0].addSectionBtn).closest("table").show();
	}, false);
	
	// Add an event listener to hide the comment if No is clicked
	surgeryNo.addEventListener('click', function() {
		$j("#" + surgeryVariables.surgeryHeading.concat("_id")).hide();
		$j("#" + surgeryVariables.surgeryAddComment.concat("_id")).hide();
		$j("#" + surgerySectionsObj[0].addSectionBtn).closest("table").hide();
	}, false);
	
	surgeryYes.addEventListener('dblclick', function() {
		$j("#" + surgeryVariables.surgeryHeading.concat("_id")).hide();
		$j("#" + surgeryVariables.surgeryAddComment.concat("_id")).hide();
		$j("#" + surgerySectionsObj[0].addSectionBtn).closest("table").hide();
	}, false);

//	/** BEGIN TEST DATA  **/
//	$j("#" + surgerySectionsObj[0].surgeryAge).val("15");
//	$j("#" + surgerySectionsObj[1].surgeryAge).val("18");
//	/** END TEST DATA  **/
		
	// hide the delete Button in the first section - it should never be seen
	$j("#" + surgerySectionsObj[0].delSectionBtn).hide();
	
    // Start the for loop in the second section because the first section
    // will always display.
	for ( var i = 1; i < surgerySections; i++) {

		//Check if the Age field has data in it
		//If this is True - assume that there are values for all columns and check the next row.
		if ($j("#" + surgerySectionsObj[i].surgeryAge).val() != "")
		{
			//Hide the add button in the previous row. 
			$j("#" + surgerySectionsObj[i-1].addSectionBtn).hide();
			$j("#" + surgerySectionsObj[i-1].delSectionBtn).hide();
		
			if(i == (surgerySections - 1)){
				$j("#" + surgerySectionsObj[i].addSectionBtn).hide();
			}
		
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			$j("#" + surgerySectionsObj[i-1].addSectionBtn).show();
			if((i-1) > 0){
				$j("#" + surgerySectionsObj[i-1].delSectionBtn).show();
			}
		
			//Hide this section.
			$j("#" + surgerySectionsObj[i].surgeryHeading).closest("table").hide();
			$j("#" + surgerySectionsObj[i].surgeryAge).closest("table").hide();
			$j("#" + surgerySectionsObj[i].surgeryType).closest("table").hide();
			$j("#" + surgerySectionsObj[i].surgeryType).parents("table").hide();
			$j("#" + surgerySectionsObj[i].surgeryTypeDescribe).closest("table").hide();
			$j("#" + surgerySectionsObj[i].surgeryTreatmentGiven).closest("table").hide();
			$j("#" + surgerySectionsObj[i].surgeryTreatmentGiven).parents("table").hide();
			$j("#" + surgerySectionsObj[i].surgeryTreatmentPrevention).closest("table").hide();
			$j("#" + surgerySectionsObj[i].surgeryTreatmentPrevention).parents("table").hide();
			$j("#" + surgerySectionsObj[i].surgeryExcessiveBleeding).closest("table").hide();
			$j("#" + surgerySectionsObj[i].surgeryExcessiveBleeding).parents("table").hide();
			$j("#" + surgerySectionsObj[i].surgeryTime).closest("table").hide();
			$j("#" + surgerySectionsObj[i].surgeryTime).parents("table").hide();
			$j("#" + surgerySectionsObj[i].surgeryTreatment).closest("table").hide();
			$j("#" + surgerySectionsObj[i].surgeryTreatment).parents("table").hide();
			$j("#" + surgerySectionsObj[i].surgeryTreatedHow).closest("table").hide();
			$j("#" + surgerySectionsObj[i].surgeryTreatedHow).parents("table").hide();
			$j("#" + surgerySectionsObj[i].addSectionBtn).closest("table").hide();
		}
	}

	$j(".addBtnSurgery").click(function() {
		var parentLabelElement = $j(this).parent("label");
		var labelId = $j(parentLabelElement).attr("id");

		var x;
		var i = 0;

		while (!Boolean(x)) {
			var rowName = surgerySectionsObj[i].addSectionBtn;
			if (rowName === labelId) {
				x = "True";
				//Hide the delete and add buttons in this row
				if(i < surgerySectionsObj.length) {
					if(i != (surgerySectionsObj.length-1)) {
						$j("#" + surgerySectionsObj[i].delSectionBtn).hide();
					}
					$j("#" + surgerySectionsObj[i].addSectionBtn).hide();

				}
				//Show all values in row where the add button was selected
				$j("#" + surgerySectionsObj[i+1].surgeryHeading).closest("table").show();
				$j("#" + surgerySectionsObj[i+1].surgeryAge).closest("table").show();
				$j("#" + surgerySectionsObj[i+1].surgeryType).closest("table").show();
				$j("#" + surgerySectionsObj[i+1].surgeryType).parents("table").show();
//				$j("#" + surgerySectionsObj[i+1].surgeryTypeDescribe).closest("table").show();
				$j("#" + surgerySectionsObj[i+1].surgeryTreatmentGiven).closest("table").show();
				$j("#" + surgerySectionsObj[i+1].surgeryTreatmentGiven).parents("table").show();
//				$j("#" + surgerySectionsObj[i+1].surgeryTreatmentPrevention).closest("table").show();
//				$j("#" + surgerySectionsObj[i+1].surgeryTreatmentPrevention).parents("table").show();
				$j("#" + surgerySectionsObj[i+1].surgeryExcessiveBleeding).closest("table").show();
				$j("#" + surgerySectionsObj[i+1].surgeryExcessiveBleeding).parents("table").show();
//				$j("#" + surgerySectionsObj[i+1].surgeryBleedingLength).closest("table").show();
//				$j("#" + surgerySectionsObj[i+1].surgeryBleedingTreatment).closest("table").show();
//				$j("#" + surgerySectionsObj[i+1].surgeryBleedingTreatment).parents("table").show();
//				$j("#" + surgerySectionsObj[i+1].surgeryBleedingTreatmentGiven).closest("table").show();
//				$j("#" + surgerySectionsObj[i+1].surgeryBleedingTreatmentGiven).parents("table").show();
				$j("#" + surgerySectionsObj[i+1].addSectionBtn).closest("table").show();
			} 
				i++;
		}
	});

	$j(".deleteBtnSurgery").click(function() {
		var parentLabelElement = $j(this).parent("label");
		var labelId = $j(parentLabelElement).attr("id");

		var y;
		var i = 0;
		var listUncheck;

		while (!Boolean(y)) {
			var rowName = surgerySectionsObj[i].delSectionBtn;
			if (rowName === labelId) {
				y = "True";
				
				//Remove values from current row and hide the row
				$j("#" + surgerySectionsObj[i].surgeryHeading).closest("table").hide();
				
				$j("#" + surgerySectionsObj[i].surgeryAge).val("");
				$j("#" + surgerySectionsObj[i].surgeryAge).closest("table").hide();

				var b = surgerySectionsObj[i].surgeryType.indexOf("_span");
				listUncheck = document.getElementsByName(surgerySectionsObj[i].surgeryType.substring(0, b));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + surgerySectionsObj[i].surgeryType).closest("table").hide();
				$j("#" + surgerySectionsObj[i].surgeryType).parents("table").hide();
				
				$j("#" + surgerySectionsObj[i].surgeryTypeDescribe).val("");
				$j("#" + surgerySectionsObj[i].surgeryTypeDescribe).closest("table").hide();

				var d = surgerySectionsObj[i].surgeryTreatmentGiven.indexOf("_span");
				listUncheck = document.getElementsByName(surgerySectionsObj[i].surgeryTreatmentGiven.substring(0, d));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + surgerySectionsObj[i].surgeryTreatmentGiven).closest("table").hide();
				$j("#" + surgerySectionsObj[i].surgeryTreatmentGiven).parents("table").hide();

				var e = surgerySectionsObj[i].surgeryTreatmentPrevention.indexOf("_span");
				listUncheck = document.getElementsByName(surgerySectionsObj[i].surgeryTreatmentPrevention.substring(0, e));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + surgerySectionsObj[i].surgeryTreatmentPrevention).closest("table").hide();
				$j("#" + surgerySectionsObj[i].surgeryTreatmentPrevention).parents("table").hide();

				var f = surgerySectionsObj[i].surgeryExcessiveBleeding.indexOf("_span");
				listUncheck = document.getElementsByName(surgerySectionsObj[i].surgeryExcessiveBleeding.substring(0, f));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + surgerySectionsObj[i].surgeryExcessiveBleeding).closest("table").hide();
				$j("#" + surgerySectionsObj[i].surgeryExcessiveBleeding).parents("table").hide();
				
				var g = surgerySectionsObj[i].surgeryTime.indexOf("_span");
				listUncheck = document.getElementsByName(surgerySectionsObj[i].surgeryTime.substring(0, g));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + surgerySectionsObj[i].surgeryTime).closest("table").hide();
				$j("#" + surgerySectionsObj[i].surgeryTime).parents("table").hide();
				
				var h = surgerySectionsObj[i].surgeryTreatment.indexOf("_span");
				listUncheck = document.getElementsByName(surgerySectionsObj[i].surgeryTreatment.substring(0, h));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + surgerySectionsObj[i].surgeryTreatment).closest("table").hide();
				$j("#" + surgerySectionsObj[i].surgeryTreatment).parents("table").hide();
				
				var l = surgerySectionsObj[i].surgeryTreatedHow.indexOf("_span");
				listUncheck = document.getElementsByName(surgerySectionsObj[i].surgeryTreatedHow.substring(0, l));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + surgerySectionsObj[i].surgeryTreatedHow).closest("table").hide();
				$j("#" + surgerySectionsObj[i].surgeryTreatedHow).parents("table").hide();

				$j("#" + surgerySectionsObj[i].addSectionBtn).closest("table").hide();
				
				//show the Add and Delete Button on the previous row
				$j("#" + surgerySectionsObj[i-1].addSectionBtn).show();
				if((i-1) > 0) {
					$j("#" + surgerySectionsObj[i-1].delSectionBtn).show();
				}
			}
				i++;
		}
	});
	
	var a;
	var fieldID;
	
	for (var i = 1; i < surgerySections; i++) {
		a = surgerySectionsObj[i].surgeryType.indexOf("_span");
		fieldID = surgerySectionsObj[i].surgeryType.substring(0, a);
		var surgeryTypeOtherDescribe = document.getElementsByName(fieldID)[7];
		
		if (!surgeryTypeOtherDescribe.checked) {
			$j("#" + surgerySectionsObj[i].surgeryTypeDescribe).closest("table").hide();
		}

		$j(surgeryTypeOtherDescribe).click(showSurgeryTypeDescribe(i, surgeryTypeOtherDescribe)); {}
	}

	for (var i = 1; i < surgerySections; i++) {
	//Get the Yes/No element names for the appropriate field
		a = surgerySectionsObj[i].surgeryTreatmentGiven.indexOf("_span");
		fieldID = surgerySectionsObj[i].surgeryTreatmentGiven.substring(0, a);
		var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
		var treatmentPreventionNo = document.getElementsByName(fieldID)[1];
	
		// Hide the comments if primary question has answer of no
		if (!treatmentPreventionYes.checked) {
			$j("#" + surgerySectionsObj[i].surgeryTreatmentPrevention).closest("table").hide();
			$j("#" + surgerySectionsObj[i].surgeryTreatmentPrevention).parents("table").hide();
		}	
		
		$j(treatmentPreventionYes).click(showChildTreamentPreventionSurgery(i)); {}
		$j(treatmentPreventionNo).click(hideChildTreamentPreventionSurgery(i)); {}
	}
		
	for (var i = 1; i < surgerySections; i++) {
		a = surgerySectionsObj[i].surgeryExcessiveBleeding.indexOf("_span");
		fieldID = surgerySectionsObj[i].surgeryExcessiveBleeding.substring(0, a);
		var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
		var excessiveBleedingNo = document.getElementsByName(fieldID)[1];
	
		// Hide the comments if primary question has answer of no
		if (!excessiveBleedingYes.checked) {
			$j("#" + surgerySectionsObj[i].surgeryTime).closest("table").hide();
			$j("#" + surgerySectionsObj[i].surgeryTime).parents("table").hide();
			$j("#" + surgerySectionsObj[i].surgeryTreatment).closest("table").hide();
			$j("#" + surgerySectionsObj[i].surgeryTreatment).parents("table").hide();
		}
	
		$j(excessiveBleedingYes).click(showChildExcessiveBleedingSurgery(i)); {}
		$j(excessiveBleedingNo).click(hideChildExcessiveBleedingSurgery(i)); {}
	}
	
	for (var i = 1; i < surgerySections; i++) {
		a = surgerySectionsObj[i].surgeryTreatment.indexOf("_span");
		fieldID = surgerySectionsObj[i].surgeryTreatment.substring(0, a);
		var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
		var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];
	
		// Hide the comments if primary question has answer of no
		if (!bleedingTreatmentYes.checked) {
			$j("#" + surgerySectionsObj[i].surgeryTreatedHow).closest("table").hide();
			$j("#" + surgerySectionsObj[i].surgeryTreatedHow).parents("table").hide();
		}
		
		$j(bleedingTreatmentYes).click(showChildTreatmentSurgery(i)); {}
		$j(bleedingTreatmentNo).click(hideChildTreamentSurgery(i)); {}
	}
});

function showSurgeryTypeDescribe(j, x) {
	return function(event) {
		if (x.checked)
			$j("#" + surgerySectionsObj[j].surgeryTypeDescribe).closest("table").show();
		else
			$j("#" + surgerySectionsObj[j].surgeryTypeDescribe).closest("table").hide();
	};
}

function showChildTreamentPreventionSurgery(j) {
	return function(event) {
		$j("#" + surgerySectionsObj[j].surgeryTreatmentPrevention).closest("table").show();
		$j("#" + surgerySectionsObj[j].surgeryTreatmentPrevention).parents("table").show();
	};
}

function hideChildTreamentPreventionSurgery(j) {
	return function(event) {
		$j("#" + surgerySectionsObj[j].surgeryTreatmentPrevention).closest("table").hide();
		$j("#" + surgerySectionsObj[j].surgeryTreatmentPrevention).parents("table").hide();
	};
}

function showChildExcessiveBleedingSurgery(j) {
	return function(event) {
		$j("#" + surgerySectionsObj[j].surgeryTime).closest("table").show();
		$j("#" + surgerySectionsObj[j].surgeryTime).parents("table").show();
		$j("#" + surgerySectionsObj[j].surgeryTreatment).closest("table").show();
		$j("#" + surgerySectionsObj[j].surgeryTreatment).parents("table").show();
	};
}

function hideChildExcessiveBleedingSurgery(j) {
	return function(event) {
		$j("#" + surgerySectionsObj[j].surgeryTime).closest("table").hide();
		$j("#" + surgerySectionsObj[j].surgeryTime).parents("table").hide();
		$j("#" + surgerySectionsObj[j].surgeryTreatment).closest("table").hide();
		$j("#" + surgerySectionsObj[j].surgeryTreatment).parents("table").hide();
	};
}

function showChildTreatmentSurgery(j) {
	return function(event) {
		$j("#" + surgerySectionsObj[j].surgeryTreatedHow).closest("table").show();
		$j("#" + surgerySectionsObj[j].surgeryTreatedHow).parents("table").show();
	};
}

function hideChildTreamentSurgery(j) {
	return function(event) {
		$j("#" + surgerySectionsObj[j].surgeryTreatedHow).closest("table").hide();
		$j("#" + surgerySectionsObj[j].surgeryTreatedHow).parents("table").hide();
	};
}
