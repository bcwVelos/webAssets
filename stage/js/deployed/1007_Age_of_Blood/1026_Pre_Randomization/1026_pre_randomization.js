var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var totalRows = 20;
var medicationRows = new Array(totalRows);

medicationRows[0] = {
	medicationName : 'fld10050_119901_124343_span',  
	medicationDose : 'fld10050_119921_124363_span',
	medicationFrequency: 'fld10050_119941_124383_span',
	addRowBtn : 'fld10050_119881_124323_id',
	delRowBtn : 'fld10050_119861_124303_id'
}

for (var i = 1; i < totalRows; i++) {
	medicationRows[i] = {
		medicationName : String(generateNextID(medicationRows[i-1].medicationName).concat("_span")),
		medicationDose : String(generateNextID(medicationRows[i-1].medicationDose).concat("_span")),
		medicationFrequency : String(generateNextID(medicationRows[i-1].medicationFrequency).concat("_span")),
		addRowBtn : String(generateNextID(medicationRows[i-1].addRowBtn).concat("_id")),
		delRowBtn : String(generateNextID(medicationRows[i-1].delRowBtn).concat("_id"))
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
	
		//$j("#" + medicationRows[0].medicationName.substring(0, 20)).val("123456");
	
		//hide the comments label- never want to see it
		$j('td:contains("Comments")').hide();
	
		//Check to see how many medications are available for the page
		var rowTotal = medicationRows.length;
	
		// hide the delete Button in the first row - it should never be seen
		$j("#" + medicationRows[0].delRowBtn).hide();


	    // Start the for loop in the second row (array # 1) because the first row
	    // will always display.
		for ( var i = 1; i < rowTotal; i++) {
			
		// when the form loads, check to see if there is data populated in the
		// rows.
		var a = medicationRows[i].medicationName.indexOf("_span");
		var b = medicationRows[i].medicationDose.indexOf("_span");		
		var b = medicationRows[i].medicationFrequency.indexOf("_span");
		
		//Check if the addtlOrgs dropdown has an option selected OR
		//Check if the Brand Name has data in it
		//If either of these are True - assume that there are values for all columns and check the next row.
		if ($j("#" + medicationRows[i].medicationName.substring(0, a)).val() != "")
		{
			//Hide the add button in the previous row. 
			$j("#" + medicationRows[i-1].addRowBtn).hide();
			$j("#" + medicationRows[i-1].delRowBtn).hide();
			
			if(i == 9){
				$j("#" + medicationRows[i].addRowBtn).hide();
			}
			
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			$j("#" + medicationRows[i-1].addRowBtn).show();
			if((i-1) > 0){
				$j("#" + medicationRows[i-1].delRowBtn).show();
			}
			
			//Hide this row.
			$j("#" + medicationRows[i].medicationName).closest("tr").hide();
			
		}
	}

	
$j(".addBtn").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = medicationRows[i].addRowBtn;
		if (rowName === labelId) {
			x = "True";
			//Hide the delete and add buttons in this row
			if(i < medicationRows.length) {
				if(i != (medicationRows.length-1)) {
					$j("#" + medicationRows[i].delRowBtn).hide();
				}
				$j("#" + medicationRows[i].addRowBtn).hide();

			}
					
			//Show all values in row where the add button was selected
			$j("#" + medicationRows[i+1].medicationName).closest("tr").show();
			$j("#" + medicationRows[i+1].medicationName).show();
			$j("#" + medicationRows[i+1].medicationName).siblings().show();
			$j("#" + medicationRows[i+1].medicationDose).show();
			$j("#" + medicationRows[i+1].medicationFrequency).show();
			
		} 
			i++;
		
		if((i+1) === (medicationRows.length -1)) {
                        $j("#" + medicationRows[i+1].addRowBtn).hide();
                  }
	}

});



$j(".deleteBtn").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var y;
	var i = 0;

	while (!Boolean(y)) {
		var rowName = medicationRows[i].delRowBtn;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			var a = medicationRows[i].medicationName.indexOf("_span");
			$j("#" + medicationRows[i].medicationName.substring(0, a)).val("");
			$j("#" + medicationRows[i].medicationName).hide();
			$j("#" + medicationRows[i].medicationName).siblings().hide();

			var b = medicationRows[i].medicationDose.indexOf("_span");
			$j("#" + medicationRows[i].medicationDose.substring(0, b)).val("");
			$j("#" + medicationRows[i].medicationDose).hide();
			
			var c = medicationRows[i].medicationFrequency.indexOf("_span");
			$j("#" + medicationRows[i].medicationFrequency.substring(0, c)).val("");
			$j("#" + medicationRows[i].medicationFrequency).hide();

			$j("#" + medicationRows[i].medicationName).closest("tr").hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + medicationRows[i-1].addRowBtn).show();
			if((i-1) > 0) {
				$j("#" + medicationRows[i-1].delRowBtn).show();
			}
		}
			i++;
	
	}

});

});



