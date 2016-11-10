var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var hematomaSectionsObj = new Array(hematomaSections);

hematomaSectionsObj[0] = {
	hematomaHeading : hematomaVariables.hematomaHeading.concat("_id"),
	hematomaAge : hematomaVariables.hematomaAge,
	hematomaType : hematomaVariables.hematomaType.concat("_span"),
	hematomaTypeOther : hematomaVariables.hematomaTypeOther,
	hematomaLocation : hematomaVariables.hematomaLocation.concat("_span"),
	hematomaTreatment : hematomaVariables.hematomaTreatment.concat("_span"),
	hematomaTreatedHow : hematomaVariables.hematomaTreatedHow.concat("_span"),
	addSectionBtn : hematomaVariables.hematomaAddBtn.concat("_id"),
	delSectionBtn : hematomaVariables.hematomaDeleteBtn.concat("_id")
}

for (var i = 1; i < hematomaSections; i++) {
	hematomaSectionsObj[i] = {
		hematomaHeading : String(generateNextID(hematomaSectionsObj[i-1].hematomaHeading).concat("_id")),
		hematomaAge : String(generateNextID(hematomaSectionsObj[i-1].hematomaAge)),
		hematomaType : String(generateNextID(hematomaSectionsObj[i-1].hematomaType).concat("_span")),
		hematomaTypeOther : String(generateNextID(hematomaSectionsObj[i-1].hematomaTypeOther)),
		hematomaLocation : String(generateNextID(hematomaSectionsObj[i-1].hematomaLocation).concat("_span")),
		hematomaTreatment : String(generateNextID(hematomaSectionsObj[i-1].hematomaTreatment).concat("_span")),
		hematomaTreatedHow : String(generateNextID(hematomaSectionsObj[i-1].hematomaTreatedHow).concat("_span")),
		addSectionBtn : String(generateNextID(hematomaSectionsObj[i-1].addSectionBtn).concat("_id")),
		delSectionBtn : String(generateNextID(hematomaSectionsObj[i-1].delSectionBtn).concat("_id"))
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
	var hematomaYes = document.getElementsByName(hematomaVariables.hematomaPrimary)[0];
	var hematomaNo = document.getElementsByName(hematomaVariables.hematomaPrimary)[1];
	
	// Hide the comments if primary question has answer of no
	if (!hematomaYes.checked) {
		$j("#" + hematomaVariables.hematomaHeading.concat("_id")).hide();
		$j("#" + hematomaVariables.hematomaAddComment.concat("_id")).hide();
		$j("#" + hematomaSectionsObj[0].addSectionBtn).closest("table").hide();
	}
	
	// Add an event listener to show the comment if Yes is clicked
	hematomaYes.addEventListener('click', function() {
		$j("#" + hematomaVariables.hematomaHeading.concat("_id")).show();
		$j("#" + hematomaVariables.hematomaAddComment.concat("_id")).show();
		$j("#" + hematomaSectionsObj[0].addSectionBtn).closest("table").show();
	}, false);
	
	// Add an event listener to hide the comment if No is clicked
	hematomaNo.addEventListener('click', function() {
		$j("#" + hematomaVariables.hematomaHeading.concat("_id")).hide();
		$j("#" + hematomaVariables.hematomaAddComment.concat("_id")).hide();
		$j("#" + hematomaSectionsObj[0].addSectionBtn).closest("table").hide();
	}, false);
	
	hematomaYes.addEventListener('dblclick', function() {
		$j("#" + hematomaVariables.hematomaHeading.concat("_id")).hide();
		$j("#" + hematomaVariables.hematomaAddComment.concat("_id")).hide();
		$j("#" + hematomaSectionsObj[0].addSectionBtn).closest("table").hide();
	}, false);

//	/** BEGIN TEST DATA  **/
//	$j("#" + hematomaSectionsObj[0].hematomaAge).val("15");
//	$j("#" + hematomaSectionsObj[1].hematomaAge).val("18");
//	/** END TEST DATA  **/

	// hide the delete Button in the first section - it should never be seen
	$j("#" + hematomaSectionsObj[0].delSectionBtn).hide();
	
    // Start the for loop in the second section because the first section
    // will always display.
	for ( var i = 1; i < hematomaSections; i++) {

		//Check if the Age field has data in it
		//If this is True - assume that there are values for all columns and check the next row.
		if ($j("#" + hematomaSectionsObj[i].hematomaAge).val() != "")
		{
			//Hide the add button in the previous row. 
			$j("#" + hematomaSectionsObj[i-1].addSectionBtn).hide();
			$j("#" + hematomaSectionsObj[i-1].delSectionBtn).hide();
		
			if(i == (hematomaSections - 1)){
				$j("#" + hematomaSectionsObj[i].addSectionBtn).hide();
			}
		
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			$j("#" + hematomaSectionsObj[i-1].addSectionBtn).show();
			if((i-1) > 0){
				$j("#" + hematomaSectionsObj[i-1].delSectionBtn).show();
			}
		
			//Hide this section.
			$j("#" + hematomaSectionsObj[i].hematomaHeading).closest("table").hide();
			$j("#" + hematomaSectionsObj[i].hematomaAge).closest("table").hide();
			$j("#" + hematomaSectionsObj[i].hematomaType).closest("table").hide();
			$j("#" + hematomaSectionsObj[i].hematomaType).parents("table").hide();
			$j("#" + hematomaSectionsObj[i].hematomaTypeOther).closest("table").hide();
			$j("#" + hematomaSectionsObj[i].hematomaLocation).closest("table").hide();
			$j("#" + hematomaSectionsObj[i].hematomaLocation).parents("table").hide();
			$j("#" + hematomaSectionsObj[i].hematomaTreatment).closest("table").hide();
			$j("#" + hematomaSectionsObj[i].hematomaTreatment).parents("table").hide();
			$j("#" + hematomaSectionsObj[i].hematomaTreatedHow).closest("table").hide();
			$j("#" + hematomaSectionsObj[i].hematomaTreatedHow).parents("table").hide();
			$j("#" + hematomaSectionsObj[i].addSectionBtn).closest("table").hide();
		}
	}
	
	$j(".addBtnhematoma").click(function() {
		var parentLabelElement = $j(this).parent("label");
		var labelId = $j(parentLabelElement).attr("id");

		var x;
		var i = 0;

		while (!Boolean(x)) {
			var rowName = hematomaSectionsObj[i].addSectionBtn;
			if (rowName === labelId) {
				x = "True";
				//Hide the delete and add buttons in this row
				if(i < hematomaSectionsObj.length) {
					if(i != (hematomaSectionsObj.length-1)) {
						$j("#" + hematomaSectionsObj[i].delSectionBtn).hide();
					}
					$j("#" + hematomaSectionsObj[i].addSectionBtn).hide();

				}
				//Show all values in row where the add button was selected
				$j("#" + hematomaSectionsObj[i+1].hematomaHeading).closest("table").show();
				$j("#" + hematomaSectionsObj[i+1].hematomaAge).closest("table").show();
				$j("#" + hematomaSectionsObj[i+1].hematomaType).closest("table").show();
				$j("#" + hematomaSectionsObj[i+1].hematomaType).parents("table").show();
				$j("#" + hematomaSectionsObj[i+1].hematomaLocation).closest("table").show();
				$j("#" + hematomaSectionsObj[i+1].hematomaLocation).parents("table").show();
				$j("#" + hematomaSectionsObj[i+1].hematomaTreatment).closest("table").show();
				$j("#" + hematomaSectionsObj[i+1].hematomaTreatment).parents("table").show();
				$j("#" + hematomaSectionsObj[i+1].addSectionBtn).closest("table").show();
			} 
				i++;
		}
	});

	$j(".deleteBtnhematoma").click(function() {
		var parentLabelElement = $j(this).parent("label");
		var labelId = $j(parentLabelElement).attr("id");

		var y;
		var i = 0;
		var listUncheck;

		while (!Boolean(y)) {
			var rowName = hematomaSectionsObj[i].delSectionBtn;
			if (rowName === labelId) {
				y = "True";
				
				//Remove values from current row and hide the row
				$j("#" + hematomaSectionsObj[i].hematomaHeading).closest("table").hide();
				
				$j("#" + hematomaSectionsObj[i].hematomaAge).val("");
				$j("#" + hematomaSectionsObj[i].hematomaAge).closest("table").hide();
				
				var b = hematomaSectionsObj[i].hematomaType.indexOf("_span");
				listUncheck = document.getElementsByName(hematomaSectionsObj[i].hematomaType.substring(0, b));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + hematomaSectionsObj[i].hematomaType).closest("table").hide();
				$j("#" + hematomaSectionsObj[i].hematomaType).parents("table").hide();
				
				$j("#" + hematomaSectionsObj[i].hematomaTypeOther).val("");
				$j("#" + hematomaSectionsObj[i].hematomaTypeOther).closest("table").hide();
				
				var c = hematomaSectionsObj[i].hematomaLocation.indexOf("_span");
				listUncheck = document.getElementsByName(hematomaSectionsObj[i].hematomaLocation.substring(0, c));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + hematomaSectionsObj[i].hematomaLocation).closest("table").hide();
				$j("#" + hematomaSectionsObj[i].hematomaLocation).parents("table").hide();

				var h = hematomaSectionsObj[i].hematomaTreatment.indexOf("_span");
				listUncheck = document.getElementsByName(hematomaSectionsObj[i].hematomaTreatment.substring(0, h));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + hematomaSectionsObj[i].hematomaTreatment).closest("table").hide();
				$j("#" + hematomaSectionsObj[i].hematomaTreatment).parents("table").hide();
				
				var l = hematomaSectionsObj[i].hematomaTreatedHow.indexOf("_span");
				listUncheck = document.getElementsByName(hematomaSectionsObj[i].hematomaTreatedHow.substring(0, l));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + hematomaSectionsObj[i].hematomaTreatedHow).closest("table").hide();
				$j("#" + hematomaSectionsObj[i].hematomaTreatedHow).parents("table").hide();

				$j("#" + hematomaSectionsObj[i].addSectionBtn).closest("table").hide();
				
				//show the Add and Delete Button on the previous row
				$j("#" + hematomaSectionsObj[i-1].addSectionBtn).show();
				if((i-1) > 0) {
					$j("#" + hematomaSectionsObj[i-1].delSectionBtn).show();
				}
			}
				i++;
		}
	});
	
	var a;
	var fieldID;

	for (var i = 1; i < hematomaSections; i++) {
		a = hematomaSectionsObj[i].hematomaType.indexOf("_span");
		fieldID = hematomaSectionsObj[i].hematomaType.substring(0, a);
		var bleedingTypeOtherDescribe = document.getElementsByName(fieldID)[2];
		var bleedingTypeOther0 = document.getElementsByName(fieldID)[0];
		var bleedingTypeOther1 = document.getElementsByName(fieldID)[1];
	
		// Hide the comments if primary question has answer of no
		if (!bleedingTypeOtherDescribe.checked) {
			$j("#" + hematomaSectionsObj[i].hematomaTypeOther).closest("table").hide();
		}
		
		$j(bleedingTypeOtherDescribe).click(showHematomaTypeDescribeOther(i)); {}
		$j(bleedingTypeOther0).click(showHematomaTypeDescribe(i)); {}
		$j(bleedingTypeOther1).click(showHematomaTypeDescribe(i)); {}
	}
		
	for (var i = 1; i < hematomaSections; i++) {
		a = hematomaSectionsObj[i].hematomaTreatment.indexOf("_span");
		fieldID = hematomaSectionsObj[i].hematomaTreatment.substring(0, a);
		var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
		var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];
	
		// Hide the comments if primary question has answer of no
		if (!bleedingTreatmentYes.checked) {
			$j("#" + hematomaSectionsObj[i].hematomaTreatedHow).closest("table").hide();
			$j("#" + hematomaSectionsObj[i].hematomaTreatedHow).parents("table").hide();
		}
		
		$j(bleedingTreatmentYes).click(showChildTreatmentHematoma(i)); {}
		$j(bleedingTreatmentNo).click(hideChildTreamentHematoma(i)); {}
	}
});

function showHematomaTypeDescribeOther(j) {
	return function(event) {
		$j("#" + hematomaSectionsObj[j].hematomaTypeOther).closest("table").show();
	};
}

function showHematomaTypeDescribe(j) {
	return function(event) {
		$j("#" + hematomaSectionsObj[j].hematomaTypeOther).closest("table").hide();
	};
}

function showChildTreatmentHematoma(j) {
	return function(event) {
		$j("#" + hematomaSectionsObj[j].hematomaTreatedHow).closest("table").show();
		$j("#" + hematomaSectionsObj[j].hematomaTreatedHow).parents("table").show();
	};
}

function hideChildTreamentHematoma(j) {
	return function(event) {
		$j("#" + hematomaSectionsObj[j].hematomaTreatedHow).closest("table").hide();
		$j("#" + hematomaSectionsObj[j].hematomaTreatedHow).parents("table").hide();
	};
}
