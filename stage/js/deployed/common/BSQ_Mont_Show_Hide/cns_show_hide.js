var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var cnsSectionsObj = new Array(cnsSections);

cnsSectionsObj[0] = {
	cnsHeading : cnsVariables.cnsHeading.concat("_id"),
	cnsAge : cnsVariables.cnsAge,
	cnsTreatment : cnsVariables.cnsTreatment.concat("_span"),
	cnsTreatedHow : cnsVariables.cnsTreatedHow.concat("_span"),
	addSectionBtn : cnsVariables.cnsAddBtn.concat("_id"),
	delSectionBtn : cnsVariables.cnsDeleteBtn.concat("_id")
}

for (var i = 1; i < cnsSections; i++) {
	cnsSectionsObj[i] = {
		cnsHeading : String(generateNextID(cnsSectionsObj[i-1].cnsHeading).concat("_id")),
		cnsAge : String(generateNextID(cnsSectionsObj[i-1].cnsAge)),
		cnsTreatment : String(generateNextID(cnsSectionsObj[i-1].cnsTreatment).concat("_span")),
		cnsTreatedHow : String(generateNextID(cnsSectionsObj[i-1].cnsTreatedHow).concat("_span")),
		addSectionBtn : String(generateNextID(cnsSectionsObj[i-1].addSectionBtn).concat("_id")),
		delSectionBtn : String(generateNextID(cnsSectionsObj[i-1].delSectionBtn).concat("_id"))
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
	var cnsYes = document.getElementsByName(cnsVariables.cnsPrimary)[0];
	var cnsNo = document.getElementsByName(cnsVariables.cnsPrimary)[1];
	
	// Hide the comments if primary question has answer of no
	if (!cnsYes.checked) {
		$j("#" + cnsVariables.cnsHeading.concat("_id")).hide();
		$j("#" + cnsVariables.cnsAddComment.concat("_id")).hide();
		$j("#" + cnsSectionsObj[0].addSectionBtn).closest("table").hide();
	}
	
	// Add an event listener to show the comment if Yes is clicked
	cnsYes.addEventListener('click', function() {
		$j("#" + cnsVariables.cnsHeading.concat("_id")).show();
		$j("#" + cnsVariables.cnsAddComment.concat("_id")).show();
		$j("#" + cnsSectionsObj[0].addSectionBtn).closest("table").show();
	}, false);
	
	// Add an event listener to hide the comment if No is clicked
	cnsNo.addEventListener('click', function() {
		$j("#" + cnsVariables.cnsHeading.concat("_id")).hide();
		$j("#" + cnsVariables.cnsAddComment.concat("_id")).hide();
		$j("#" + cnsSectionsObj[0].addSectionBtn).closest("table").hide();
	}, false);
	
	cnsYes.addEventListener('dblclick', function() {
		$j("#" + cnsVariables.cnsHeading.concat("_id")).hide();
		$j("#" + cnsVariables.cnsAddComment.concat("_id")).hide();
		$j("#" + cnsSectionsObj[0].addSectionBtn).closest("table").hide();
	}, false);

//	/** BEGIN TEST DATA  **/
//	$j("#" + cnsSectionsObj[0].cnsAge).val("15");
//	$j("#" + cnsSectionsObj[1].cnsAge).val("18");
//	/** END TEST DATA  **/
		
	// hide the delete Button in the first section - it should never be seen
	$j("#" + cnsSectionsObj[0].delSectionBtn).hide();
	
    // Start the for loop in the second section because the first section
    // will always display.
	for ( var i = 1; i < cnsSections; i++) {

		//Check if the Age field has data in it
		//If this is True - assume that there are values for all columns and check the next row.
		if ($j("#" + cnsSectionsObj[i].cnsAge).val() != "")
		{
			//Hide the add button in the previous row. 
			$j("#" + cnsSectionsObj[i-1].addSectionBtn).hide();
			$j("#" + cnsSectionsObj[i-1].delSectionBtn).hide();
		
			if(i == (cnsSections - 1)){
				$j("#" + cnsSectionsObj[i].addSectionBtn).hide();
			}
		
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			$j("#" + cnsSectionsObj[i-1].addSectionBtn).show();
			if((i-1) > 0){
				$j("#" + cnsSectionsObj[i-1].delSectionBtn).show();
			}
		
			//Hide this section.
			$j("#" + cnsSectionsObj[i].cnsHeading).closest("table").hide();
			$j("#" + cnsSectionsObj[i].cnsAge).closest("table").hide();
			$j("#" + cnsSectionsObj[i].cnsTreatment).closest("table").hide();
			$j("#" + cnsSectionsObj[i].cnsTreatment).parents("table").hide();
			$j("#" + cnsSectionsObj[i].cnsTreatedHow).closest("table").hide();
			$j("#" + cnsSectionsObj[i].cnsTreatedHow).parents("table").hide();
			$j("#" + cnsSectionsObj[i].addSectionBtn).closest("table").hide();
		}
	}

	$j(".addBtnCNS").click(function() {
		var parentLabelElement = $j(this).parent("label");
		var labelId = $j(parentLabelElement).attr("id");

		var x;
		var i = 0;

		while (!Boolean(x)) {
			var rowName = cnsSectionsObj[i].addSectionBtn;
			if (rowName === labelId) {
				x = "True";
				//Hide the delete and add buttons in this row
				if(i < cnsSectionsObj.length) {
					if(i != (cnsSectionsObj.length-1)) {
						$j("#" + cnsSectionsObj[i].delSectionBtn).hide();
					}
					$j("#" + cnsSectionsObj[i].addSectionBtn).hide();

				}
				//Show all values in row where the add button was selected
				$j("#" + cnsSectionsObj[i+1].cnsHeading).closest("table").show();
				$j("#" + cnsSectionsObj[i+1].cnsAge).closest("table").show();
				$j("#" + cnsSectionsObj[i+1].cnsTreatment).closest("table").show();
				$j("#" + cnsSectionsObj[i+1].cnsTreatment).parents("table").show();
				$j("#" + cnsSectionsObj[i+1].addSectionBtn).closest("table").show();
				if((i+1) === (cnsSectionsObj.length -1)) {
					$j("#" + cnsSectionsObj[i+1].addSectionBtn).hide();
				}
			} 
				i++;
		}
	});

	$j(".deleteBtnCNS").click(function() {
		var parentLabelElement = $j(this).parent("label");
		var labelId = $j(parentLabelElement).attr("id");

		var y;
		var i = 0;
		var listUncheck;

		while (!Boolean(y)) {
			var rowName = cnsSectionsObj[i].delSectionBtn;
			if (rowName === labelId) {
				y = "True";
				
				//Remove values from current row and hide the row
				$j("#" + cnsSectionsObj[i].cnsHeading).closest("table").hide();
				
				$j("#" + cnsSectionsObj[i].cnsAge).val("");
				$j("#" + cnsSectionsObj[i].cnsAge).closest("table").hide();

				var h = cnsSectionsObj[i].cnsTreatment.indexOf("_span");
				listUncheck = document.getElementsByName(cnsSectionsObj[i].cnsTreatment.substring(0, h));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + cnsSectionsObj[i].cnsTreatment).closest("table").hide();
				$j("#" + cnsSectionsObj[i].cnsTreatment).parents("table").hide();
				
				var l = cnsSectionsObj[i].cnsTreatedHow.indexOf("_span");
				listUncheck = document.getElementsByName(cnsSectionsObj[i].cnsTreatedHow.substring(0, l));
				for (var j = 0; j < listUncheck.length; j++)
					listUncheck[j].checked = false;
				$j("#" + cnsSectionsObj[i].cnsTreatedHow).closest("table").hide();
				$j("#" + cnsSectionsObj[i].cnsTreatedHow).parents("table").hide();

				$j("#" + cnsSectionsObj[i].addSectionBtn).closest("table").hide();
				
				//show the Add and Delete Button on the previous row
				$j("#" + cnsSectionsObj[i-1].addSectionBtn).show();
				if((i-1) > 0) {
					$j("#" + cnsSectionsObj[i-1].delSectionBtn).show();
				}
			}
				i++;
		}
	});
	
	var a;
	var fieldID;
	
	for (var i = 1; i < cnsSections; i++) {
		a = cnsSectionsObj[i].cnsTreatment.indexOf("_span");
		fieldID = cnsSectionsObj[i].cnsTreatment.substring(0, a);
		var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
		var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];
	
		// Hide the comments if primary question has answer of no
		if (!bleedingTreatmentYes.checked) {
			$j("#" + cnsSectionsObj[i].cnsTreatedHow).closest("table").hide();
			$j("#" + cnsSectionsObj[i].cnsTreatedHow).parents("table").hide();
		}
		
		$j(bleedingTreatmentYes).click(showChildTreatmentCNS(i)); {}
		$j(bleedingTreatmentNo).click(hideChildTreamentCNS(i)); {}
	}
});

function showChildTreatmentCNS(j) {
	return function(event) {
		$j("#" + cnsSectionsObj[j].cnsTreatedHow).closest("table").show();
		$j("#" + cnsSectionsObj[j].cnsTreatedHow).parents("table").show();
	};
}

function hideChildTreamentCNS(j) {
	return function(event) {
		$j("#" + cnsSectionsObj[j].cnsTreatedHow).closest("table").hide();
		$j("#" + cnsSectionsObj[j].cnsTreatedHow).parents("table").hide();
	};
}
