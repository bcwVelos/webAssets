var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var totalRows = 20;
var diagnosisRows = new Array(totalRows);

diagnosisRows[0] = {
	diagnosisName : 'fld10050_119901_124343_span',  
	diagnosisDate : 'fld10050_119921_124363_span',
	medicationFrequency: 'fld10050_119941_124383_span',
	addRowBtn11 : 'fld10050_119881_124323_id',
	delRowBtn11 : 'fld10050_119861_124303_id'
}

for (var i = 1; i < totalRows; i++) {
	diagnosisRows[i] = {
		diagnosisName : String(generateNextID(diagnosisRows[i-1].diagnosisName).concat("_span")),
		diagnosisDate : String(generateNextID(diagnosisRows[i-1].diagnosisDate).concat("_span")),
		addRowBtn1 : String(generateNextID(diagnosisRows[i-1].addRowBtn1).concat("_id")),
		delRowBtn1 : String(generateNextID(diagnosisRows[i-1].delRowBtn1).concat("_id"))
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
	
		//$j("#" + diagnosisRows[0].diagnosisName.substring(0, 20)).val("123456");
	
		//hide the comments label- never want to see it
		$j('td:contains("Comments")').hide();
	
		//Check to see how many medications are available for the page
		var rowTotal = diagnosisRows.length;
	
		// hide the delete Button in the first row - it should never be seen
		$j("#" + diagnosisRows[0].delRowBtn1).hide();


	    // Start the for loop in the second row (array # 1) because the first row
	    // will always display.
		for ( var i = 1; i < rowTotal; i++) {
			
		// when the form loads, check to see if there is data populated in the
		// rows.
		var a = diagnosisRows[i].diagnosisName.indexOf("_span");
		var b = diagnosisRows[i].diagnosisDate.indexOf("_span");
		
		//Check if the addtlOrgs dropdown has an option selected OR
		//Check if the Brand Name has data in it
		//If either of these are True - assume that there are values for all columns and check the next row.
		if ($j("#" + diagnosisRows[i].diagnosisName.substring(0, a)).val() != "")
		{
			//Hide the add button in the previous row. 
			$j("#" + diagnosisRows[i-1].addRowBtn1).hide();
			$j("#" + diagnosisRows[i-1].delRowBtn1).hide();
			
			if(i == 9){
				$j("#" + diagnosisRows[i].addRowBtn1).hide();
			}
			
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			$j("#" + diagnosisRows[i-1].addRowBtn1).show();
			if((i-1) > 0){
				$j("#" + diagnosisRows[i-1].delRowBtn1).show();
			}
			
			//Hide this row.
			$j("#" + diagnosisRows[i].diagnosisName).closest("tr").hide();
			
		}
	}

	
$j(".addBtn").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = diagnosisRows[i].addRowBtn1;
		if (rowName === labelId) {
			x = "True";
			//Hide the delete and add buttons in this row
			if(i < diagnosisRows.length) {
				if(i != (diagnosisRows.length-1)) {
					$j("#" + diagnosisRows[i].delRowBtn1).hide();
				}
				$j("#" + diagnosisRows[i].addRowBtn1).hide();

			}
					
			//Show all values in row where the add button was selected
			$j("#" + diagnosisRows[i+1].diagnosisName).closest("tr").show();
			$j("#" + diagnosisRows[i+1].diagnosisName).show();
			$j("#" + diagnosisRows[i+1].diagnosisName).siblings().show();
			$j("#" + diagnosisRows[i+1].diagnosisDate).show();
			
		} 
			i++;
		
		if((i+1) === (diagnosisRows.length -1)) {
                        $j("#" + diagnosisRows[i+1].addRowBtn1).hide();
                  }
	}

});



$j(".deleteBtn").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var y;
	var i = 0;

	while (!Boolean(y)) {
		var rowName = diagnosisRows[i].delRowBtn1;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			var a = diagnosisRows[i].diagnosisName.indexOf("_span");
			$j("#" + diagnosisRows[i].diagnosisName.substring(0, a)).val("");
			$j("#" + diagnosisRows[i].diagnosisName).hide();
			$j("#" + diagnosisRows[i].diagnosisName).siblings().hide();

			var b = diagnosisRows[i].diagnosisDate.indexOf("_span");
			$j("#" + diagnosisRows[i].diagnosisDate.substring(0, b)).val("");
			$j("#" + diagnosisRows[i].diagnosisDate).hide();

			$j("#" + diagnosisRows[i].diagnosisName).closest("tr").hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + diagnosisRows[i-1].addRowBtn1).show();
			if((i-1) > 0) {
				$j("#" + diagnosisRows[i-1].delRowBtn1).show();
			}
		}
			i++;
	
	}

});

});



