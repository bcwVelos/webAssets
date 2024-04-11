var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var totalRows = 20;
var medRows = new Array(totalRows);

medRows[0] = {
	medName : 'fld10050_145639_153135_span',
	dosage : 'fld10050_145659_153155_span',
	frequency : 'fld10050_145679_153175_span',
	startDate : 'fld10050_145699_153195_span',
	endDate : 'fld10050_145719_153215_span',
	addRowBtn : 'fld10050_145599_153095_id',
	delRowBtn : 'fld10050_145619_153115_id'
}

for (var i = 1; i < totalRows; i++) {
	medRows[i] = {
		medName : String(generateNextID(medRows[i-1].medName).concat("_span")),
		dosage : String(generateNextID(medRows[i-1].dosage).concat("_span")),
		frequency : String(generateNextID(medRows[i-1].frequency).concat("_span")),
		startDate : String(generateNextID(medRows[i-1].startDate).concat("_span")),
		endDate : String(generateNextID(medRows[i-1].endDate).concat("_span")),
		addRowBtn : String(generateNextID(medRows[i-1].addRowBtn).concat("_id")),
		delRowBtn : String(generateNextID(medRows[i-1].delRowBtn).concat("_id"))
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

		//hide the comments label- never want to see it
		$j('td:contains("Comments")').hide();
	
		//Check to see how many medications are available for the page
		var rowTotal = medRows.length;
	
		// hide the delete Button in the first row - it should never be seen
		$j("#" + medRows[0].delRowBtn).hide();

	    // Start the for loop in the second row (array # 1) because the first row
	    // will always display.
		for ( var i = 1; i < rowTotal; i++) {
			
		// when the form loads, check to see if there is data populated in the
		// rows.
		var a = medRows[i].medName.indexOf("_span");
		
		//Check if the addtlOrgs dropdown has an option selected OR
		//Check if the Brand Name has data in it
		//If either of these are True - assume that there are values for all columns and check the next row.
		if ($j("#" + medRows[i].medName.substring(0, a)).val() != "")
		{
			//Hide the add button in the previous row. 
			$j("#" + medRows[i-1].addRowBtn).hide();
			$j("#" + medRows[i-1].delRowBtn).hide();
			
			if(i == totalRows){
				$j("#" + medRows[i].addRowBtn).hide();
			}
			
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			$j("#" + medRows[i-1].addRowBtn).show();
			if((i-1) > 0){
				$j("#" + medRows[i-1].delRowBtn).show();
			}
			
			//Hide this row.
			$j("#" + medRows[i].medName).closest("tr").hide();
			
		}
	}

	
$j(".addBtn").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = medRows[i].addRowBtn;
		if (rowName === labelId) {
			x = "True";
			//Hide the delete and add buttons in this row
			if(i < medRows.length) {
				if(i != (medRows.length-1)) {
					$j("#" + medRows[i].delRowBtn).hide();
				}
				$j("#" + medRows[i].addRowBtn).hide();

			}
					
			//Show all values in row where the add button was selected
			$j("#" + medRows[i+1].medName).closest("tr").show();
			$j("#" + medRows[i+1].medName).show();
			$j("#" + medRows[i+1].medName).siblings().show();
			$j("#" + medRows[i+1].dosage).show();
			$j("#" + medRows[i+1].frequency).show();
			$j("#" + medRows[i+1].startDate).show();
			$j("#" + medRows[i+1].endDate).show();
			
		} 
			i++;
		
		if((i+1) === (medRows.length -1)) {
                        $j("#" + medRows[i+1].addRowBtn).hide();
                  }
	}

});



$j(".deleteBtn").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var y;
	var i = 0;

	while (!Boolean(y)) {
		var rowName = medRows[i].delRowBtn;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			var a = medRows[i].medName.indexOf("_span");
			$j("#" + medRows[i].medName.substring(0, a)).val("");
			$j("#" + medRows[i].medName).hide();
			$j("#" + medRows[i].medName).siblings().hide();
			
			var b = medRows[i].dosage.indexOf("_span");
			$j("#" + medRows[i].dosage.substring(0, b)).val("");
			$j("#" + medRows[i].dosage).hide();
			
			var c = medRows[i].frequency.indexOf("_span");
			$j("#" + medRows[i].frequency.substring(0, c)).val("");
			$j("#" + medRows[i].frequency).hide();
			
			var d = medRows[i].startDate.indexOf("_span");
			$j("#" + medRows[i].startDate.substring(0, d)).val("");
			$j("#" + medRows[i].startDate).hide();
			
			var e = medRows[i].endDate.indexOf("_span");
			$j("#" + medRows[i].endDate.substring(0, e)).val("");
			$j("#" + medRows[i].endDate).hide();

			$j("#" + medRows[i].medName).closest("tr").hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + medRows[i-1].addRowBtn).show();
			if((i-1) > 0) {
				$j("#" + medRows[i-1].delRowBtn).show();
			}
		}
			i++;
	}

});

});



