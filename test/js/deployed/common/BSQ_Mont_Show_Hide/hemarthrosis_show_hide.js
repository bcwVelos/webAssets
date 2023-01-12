var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var hemarthrosisSectionsObj = new Array(hemarthrosisSections);

hemarthrosisSectionsObj[0] = {
	hemarthrosisHeading : hemarthrosisVariables.hemarthrosisHeading.concat("_id"),
	hemarthrosisAge : hemarthrosisVariables.hemarthrosisAge,
	hemarthrosisType : hemarthrosisVariables.hemarthrosisType.concat("_span"),
	hemarthrosisTypeOther : hemarthrosisVariables.hemarthrosisTypeOther,
	hemarthrosisLocation : hemarthrosisVariables.hemarthrosisLocation.concat("_span"),
	hemarthrosisTreatment : hemarthrosisVariables.hemarthrosisTreatment.concat("_span"),
	hemarthrosisTreatedHow : hemarthrosisVariables.hemarthrosisTreatedHow.concat("_span"),
	addSectionBtn : hemarthrosisVariables.hemarthrosisAddBtn.concat("_id"),
	delSectionBtn : hemarthrosisVariables.hemarthrosisDeleteBtn.concat("_id")
}

for (var i = 1; i < hemarthrosisSections; i++) {
	hemarthrosisSectionsObj[i] = {
		hemarthrosisHeading : String(generateNextID(hemarthrosisSectionsObj[i-1].hemarthrosisHeading).concat("_id")),
		hemarthrosisAge : String(generateNextID(hemarthrosisSectionsObj[i-1].hemarthrosisAge)),
		hemarthrosisType : String(generateNextID(hemarthrosisSectionsObj[i-1].hemarthrosisType).concat("_span")),
		hemarthrosisTypeOther : String(generateNextID(hemarthrosisSectionsObj[i-1].hemarthrosisTypeOther)),
		hemarthrosisLocation : String(generateNextID(hemarthrosisSectionsObj[i-1].hemarthrosisLocation).concat("_span")),
		hemarthrosisTreatment : String(generateNextID(hemarthrosisSectionsObj[i-1].hemarthrosisTreatment).concat("_span")),
		hemarthrosisTreatedHow : String(generateNextID(hemarthrosisSectionsObj[i-1].hemarthrosisTreatedHow).concat("_span")),
		addSectionBtn : String(generateNextID(hemarthrosisSectionsObj[i-1].addSectionBtn).concat("_id")),
		delSectionBtn : String(generateNextID(hemarthrosisSectionsObj[i-1].delSectionBtn).concat("_id"))
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
	var hemarthrosisYes = document.getElementsByName(hemarthrosisVariables.hemarthrosisPrimary)[0];
	var hemarthrosisNo = document.getElementsByName(hemarthrosisVariables.hemarthrosisPrimary)[1];
	
	// Hide the comments if primary question has answer of no
	if (!hemarthrosisYes.checked) {
		$j("#" + hemarthrosisVariables.hemarthrosisHeading.concat("_id")).hide();
		$j("#" + hemarthrosisVariables.hemarthrosisAddComment.concat("_id")).hide();
		$j("#" + hemarthrosisSectionsObj[0].addSectionBtn).closest("table").hide();
	}
	
	// Add an event listener to show the comment if Yes is clicked
	hemarthrosisYes.addEventListener('click', function() {
		$j("#" + hemarthrosisVariables.hemarthrosisHeading.concat("_id")).show();
		$j("#" + hemarthrosisVariables.hemarthrosisAddComment.concat("_id")).show();
		$j("#" + hemarthrosisSectionsObj[0].addSectionBtn).closest("table").show();
	}, false);
	
	// Add an event listener to hide the comment if No is clicked
	hemarthrosisNo.addEventListener('click', function() {
		$j("#" + hemarthrosisVariables.hemarthrosisHeading.concat("_id")).hide();
		$j("#" + hemarthrosisVariables.hemarthrosisAddComment.concat("_id")).hide();
		$j("#" + hemarthrosisSectionsObj[0].addSectionBtn).closest("table").hide();
	}, false);
	
	hemarthrosisYes.addEventListener('dblclick', function() {
		$j("#" + hemarthrosisVariables.hemarthrosisHeading.concat("_id")).hide();
		$j("#" + hemarthrosisVariables.hemarthrosisAddComment.concat("_id")).hide();
		$j("#" + hemarthrosisSectionsObj[0].addSectionBtn).closest("table").hide();
	}, false);

//	/** BEGIN TEST DATA  **/
//	$j("#" + hemarthrosisSectionsObj[0].hemarthrosisAge).val("15");
//	$j("#" + hemarthrosisSectionsObj[1].hemarthrosisAge).val("18");
//	/** END TEST DATA  **/
	
	// hide the delete Button in the first section - it should never be seen
	$j("#" + hemarthrosisSectionsObj[0].delSectionBtn).hide();
	
    // Start the for loop in the second section because the first section
    // will always display.
	for ( var i = 1; i < hemarthrosisSections; i++) {

		//Check if the Age field has data in it
		//If this is True - assume that there are values for all columns and check the next row.
		if ($j("#" + hemarthrosisSectionsObj[i].hemarthrosisAge).val() != "")
		{
			//Hide the add button in the previous row. 
			$j("#" + hemarthrosisSectionsObj[i-1].addSectionBtn).hide();
			$j("#" + hemarthrosisSectionsObj[i-1].delSectionBtn).hide();
		
			if(i == (hemarthrosisSections - 1)){
				$j("#" + hemarthrosisSectionsObj[i].addSectionBtn).hide();
			}
		
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			$j("#" + hemarthrosisSectionsObj[i-1].addSectionBtn).show();
			if((i-1) > 0){
				$j("#" + hemarthrosisSectionsObj[i-1].delSectionBtn).show();
			}
		
			//Hide this section.
			$j("#" + hemarthrosisSectionsObj[i].hemarthrosisHeading).closest("table").hide();
			$j("#" + hemarthrosisSectionsObj[i].hemarthrosisAge).closest("table").hide();
			$j("#" + hemarthrosisSectionsObj[i].hemarthrosisType).closest("table").hide();
			$j("#" + hemarthrosisSectionsObj[i].hemarthrosisType).parents("table").hide();
			$j("#" + hemarthrosisSectionsObj[i].hemarthrosisTypeOther).closest("table").hide();
			$j("#" + hemarthrosisSectionsObj[i].hemarthrosisLocation).closest("table").hide();
			$j("#" + hemarthrosisSectionsObj[i].hemarthrosisLocation).parents("table").hide();
			$j("#" + hemarthrosisSectionsObj[i].hemarthrosisTreatment).closest("table").hide();
			$j("#" + hemarthrosisSectionsObj[i].hemarthrosisTreatment).parents("table").hide();
			$j("#" + hemarthrosisSectionsObj[i].hemarthrosisTreatedHow).closest("table").hide();
			$j("#" + hemarthrosisSectionsObj[i].hemarthrosisTreatedHow).parents("table").hide();
			$j("#" + hemarthrosisSectionsObj[i].addSectionBtn).closest("table").hide();
		}
	}

	$j(".addBtnhemarthrosis").click(function() {
		var parentLabelElement = $j(this).parent("label");
		var labelId = $j(parentLabelElement).attr("id");

		var x;
		var i = 0;

		while (!Boolean(x)) {
			var rowName = hemarthrosisSectionsObj[i].addSectionBtn;
			if (rowName === labelId) {
				x = "True";
				//Hide the delete and add buttons in this row
				if(i < hemarthrosisSectionsObj.length) {
					if(i != (hemarthrosisSectionsObj.length-1)) {
						$j("#" + hemarthrosisSectionsObj[i].delSectionBtn).hide();
					}
					$j("#" + hemarthrosisSectionsObj[i].addSectionBtn).hide();

				}
				//Show all values in row where the add button was selected
				$j("#" + hemarthrosisSectionsObj[i+1].hemarthrosisHeading).closest("table").show();
				$j("#" + hemarthrosisSectionsObj[i+1].hemarthrosisAge).closest("table").show();
				$j("#" + hemarthrosisSectionsObj[i+1].hemarthrosisType).closest("table").show();
				$j("#" + hemarthrosisSectionsObj[i+1].hemarthrosisType).parents("table").show();
				$j("#" + hemarthrosisSectionsObj[i+1].hemarthrosisLocation).closest("table").show();
				$j("#" + hemarthrosisSectionsObj[i+1].hemarthrosisLocation).parents("table").show();
				$j("#" + hemarthrosisSectionsObj[i+1].hemarthrosisTreatment).closest("table").show();
				$j("#" + hemarthrosisSectionsObj[i+1].hemarthrosisTreatment).parents("table").show();
				$j("#" + hemarthrosisSectionsObj[i+1].addSectionBtn).closest("table").show();
				if((i+1) === (hemarthrosisSectionsObj.length -1)) {
					$j("#" + hemarthrosisSectionsObj[i+1].addSectionBtn).hide();
				}
			} 
				i++;
		}
	});

	$j(".deleteBtnhemarthrosis").click(function() {
		var parentLabelElement = $j(this).parent("label");
		var labelId = $j(parentLabelElement).attr("id");

		var y;
		var i = 0;
		var listUncheck;

		while (!Boolean(y)) {
			var rowName = hemarthrosisSectionsObj[i].delSectionBtn;
			if (rowName === labelId) {
				y = "True";
				
				//Remove values from current row and hide the row
				$j("#" + hemarthrosisSectionsObj[i].hemarthrosisHeading).closest("table").hide();
				
				$j("#" + hemarthrosisSectionsObj[i].hemarthrosisAge).val("");
				$j("#" + hemarthrosisSectionsObj[i].hemarthrosisAge).closest("table").hide();
				
				var b = hemarthrosisSectionsObj[i].hemarthrosisType.indexOf("_span");
				listUncheck = document.getElementsByName(hemarthrosisSectionsObj[i].hemarthrosisType.substring(0, b));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + hemarthrosisSectionsObj[i].hemarthrosisType).closest("table").hide();
				$j("#" + hemarthrosisSectionsObj[i].hemarthrosisType).parents("table").hide();
				
				$j("#" + hemarthrosisSectionsObj[i].hemarthrosisTypeOther).val("");
				$j("#" + hemarthrosisSectionsObj[i].hemarthrosisTypeOther).closest("table").hide();
				
				var c = hemarthrosisSectionsObj[i].hemarthrosisLocation.indexOf("_span");
				listUncheck = document.getElementsByName(hemarthrosisSectionsObj[i].hemarthrosisLocation.substring(0, c));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + hemarthrosisSectionsObj[i].hemarthrosisLocation).closest("table").hide();
				$j("#" + hemarthrosisSectionsObj[i].hemarthrosisLocation).parents("table").hide();

				var h = hemarthrosisSectionsObj[i].hemarthrosisTreatment.indexOf("_span");
				listUncheck = document.getElementsByName(hemarthrosisSectionsObj[i].hemarthrosisTreatment.substring(0, h));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + hemarthrosisSectionsObj[i].hemarthrosisTreatment).closest("table").hide();
				$j("#" + hemarthrosisSectionsObj[i].hemarthrosisTreatment).parents("table").hide();
				
				var l = hemarthrosisSectionsObj[i].hemarthrosisTreatedHow.indexOf("_span");
				listUncheck = document.getElementsByName(hemarthrosisSectionsObj[i].hemarthrosisTreatedHow.substring(0, l));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + hemarthrosisSectionsObj[i].hemarthrosisTreatedHow).closest("table").hide();
				$j("#" + hemarthrosisSectionsObj[i].hemarthrosisTreatedHow).parents("table").hide();

				$j("#" + hemarthrosisSectionsObj[i].addSectionBtn).closest("table").hide();
				
				//show the Add and Delete Button on the previous row
				$j("#" + hemarthrosisSectionsObj[i-1].addSectionBtn).show();
				if((i-1) > 0) {
					$j("#" + hemarthrosisSectionsObj[i-1].delSectionBtn).show();
				}
			}
				i++;
		}
	});
	
	var a;
	var fieldID;
	
	for (var i = 1; i < hemarthrosisSections; i++) {
		a = hemarthrosisSectionsObj[i].hemarthrosisType.indexOf("_span");
		fieldID = hemarthrosisSectionsObj[i].hemarthrosisType.substring(0, a);
		var bleedingTypeOtherDescribe = document.getElementsByName(fieldID)[2];
		var bleedingTypeOther0 = document.getElementsByName(fieldID)[0];
		var bleedingTypeOther1 = document.getElementsByName(fieldID)[1];
	
		// Hide the comments if primary question has answer of no
		if (!bleedingTypeOtherDescribe.checked) {
			$j("#" + hemarthrosisSectionsObj[i].hemarthrosisTypeOther).closest("table").hide();
		}
		
		$j(bleedingTypeOtherDescribe).click(showHemarthrosisTypeDescribeOther(i)); {}
		$j(bleedingTypeOther0).click(showHemarthrosisTypeDescribe(i)); {}
		$j(bleedingTypeOther1).click(showHemarthrosisTypeDescribe(i)); {}
	}
		
	for (var i = 1; i < hemarthrosisSections; i++) {
		a = hemarthrosisSectionsObj[i].hemarthrosisTreatment.indexOf("_span");
		fieldID = hemarthrosisSectionsObj[i].hemarthrosisTreatment.substring(0, a);
		var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
		var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];
	
		// Hide the comments if primary question has answer of no
		if (!bleedingTreatmentYes.checked) {
			$j("#" + hemarthrosisSectionsObj[i].hemarthrosisTreatedHow).closest("table").hide();
			$j("#" + hemarthrosisSectionsObj[i].hemarthrosisTreatedHow).parents("table").hide();
		}
		
		$j(bleedingTreatmentYes).click(showChildTreatmentHemarthrosis(i)); {}
		$j(bleedingTreatmentNo).click(hideChildTreamentHemarthrosis(i)); {}
	}
});

function showHemarthrosisTypeDescribeOther(j) {
	return function(event) {
		$j("#" + hemarthrosisSectionsObj[j].hemarthrosisTypeOther).closest("table").show();
	};
}

function showHemarthrosisTypeDescribe(j) {
	return function(event) {
		$j("#" + hemarthrosisSectionsObj[j].hemarthrosisTypeOther).closest("table").hide();
	};
}

function showChildTreatmentHemarthrosis(j) {
	return function(event) {
		$j("#" + hemarthrosisSectionsObj[j].hemarthrosisTreatedHow).closest("table").show();
		$j("#" + hemarthrosisSectionsObj[j].hemarthrosisTreatedHow).parents("table").show();
	};
}

function hideChildTreamentHemarthrosis(j) {
	return function(event) {
		$j("#" + hemarthrosisSectionsObj[j].hemarthrosisTreatedHow).closest("table").hide();
		$j("#" + hemarthrosisSectionsObj[j].hemarthrosisTreatedHow).parents("table").hide();
	};
}
