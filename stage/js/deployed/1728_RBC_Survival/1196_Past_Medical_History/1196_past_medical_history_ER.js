var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var totalRowsER = 100;
var emergencyRoomRows = new Array(totalRowsER);

emergencyRoomRows[0] = {
	erDate : 'fld10050_136716_142922_span',  
	erDiagnosis : 'fld10050_136416_142622_span',
	addRowBtn2 : 'fld10050_136616_142822_id',
	DelRowBtn2 : 'fld10050_136316_142522_id'
}

for (var i = 1; i < totalRowsER; i++) {
	emergencyRoomRows[i] = {
		erDate : String(generateNextID(emergencyRoomRows[i-1].erDate).concat("_span")),
		erDiagnosis : String(generateNextID(emergencyRoomRows[i-1].erDiagnosis).concat("_span")),
		addRowBtn2 : String(generateNextID(emergencyRoomRows[i-1].addRowBtn2).concat("_id")),
		DelRowBtn2 : String(generateNextID(emergencyRoomRows[i-1].DelRowBtn2).concat("_id"))
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
	
		//$j("#" + emergencyRoomRows[0].erDate.substring(0, 20)).val("123456");
	
		//hide the comments label- never want to see it
		$j('td:contains("Comments")').hide();
		$j('td:contains("Space Break")').hide();
	
		//Check to see how many medications are available for the page
		var rowTotalER = emergencyRoomRows.length;
	
		// hide the delete Button in the first row - it should never be seen
		$j("#" + emergencyRoomRows[0].DelRowBtn2).hide();


	    // Start the for loop in the second row (array # 1) because the first row
	    // will always display.
		for ( var i = 1; i < rowTotalER; i++) {
			
		// when the form loads, check to see if there is data populated in the
		// rows.
		var a = emergencyRoomRows[i].erDate.indexOf("_span");
		var b = emergencyRoomRows[i].erDiagnosis.indexOf("_span");
		
		//Check if the addtlOrgs dropdown has an option selected OR
		//Check if the Brand Name has data in it
		//If either of these are True - assume that there are values for all columns and check the next row.
		if ($j("#" + emergencyRoomRows[i].erDate.substring(0, a)).val() != "" ||
				$j("#" + emergencyRoomRows[i].erDiagnosis.substring(0,b)).val() != "")
		{
			//Hide the add button in the previous row. 
			$j("#" + emergencyRoomRows[i-1].addRowBtn2).hide();
			$j("#" + emergencyRoomRows[i-1].DelRowBtn2).hide();
			
			if(i == 99){
				$j("#" + emergencyRoomRows[i].addRowBtn2).hide();
			}
			
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			$j("#" + emergencyRoomRows[i-1].addRowBtn2).show();
			if((i-1) > 0){
				$j("#" + emergencyRoomRows[i-1].DelRowBtn2).show();
			}
			
			//Hide this row.
			$j("#" + emergencyRoomRows[i].erDate).closest("tr").hide();
			
		}
	}

	
$j(".addBtn2").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = emergencyRoomRows[i].addRowBtn2;
		if (rowName === labelId) {
			x = "True";
			//Hide the delete and add buttons in this row
			if(i < emergencyRoomRows.length) {
				if(i != (emergencyRoomRows.length-1)) {
					$j("#" + emergencyRoomRows[i].DelRowBtn2).hide();
				}
				$j("#" + emergencyRoomRows[i].addRowBtn2).hide();

			}
					
			//Show all values in row where the add button was selected
			$j("#" + emergencyRoomRows[i+1].erDate).closest("tr").show();
			$j("#" + emergencyRoomRows[i+1].erDate).show();
			$j("#" + emergencyRoomRows[i+1].erDate).siblings().show();
			$j("#" + emergencyRoomRows[i+1].erDiagnosis).show();
			
		} 
			i++;
		
		if((i+1) === (emergencyRoomRows.length -1)) {
                        $j("#" + emergencyRoomRows[i+1].addRowBtn2).hide();
                  }
	}

});



$j(".deleteBtn2").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var y;
	var i = 0;

	while (!Boolean(y)) {
		var rowName = emergencyRoomRows[i].DelRowBtn2;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			var a = emergencyRoomRows[i].erDate.indexOf("_span");
			$j("#" + emergencyRoomRows[i].erDate.substring(0, a)).val("");
			$j("#" + emergencyRoomRows[i].erDate).hide();
			$j("#" + emergencyRoomRows[i].erDate).siblings().hide();

			var b = emergencyRoomRows[i].erDiagnosis.indexOf("_span");
			$j("#" + emergencyRoomRows[i].erDiagnosis.substring(0, b)).val("");
			$j("#" + emergencyRoomRows[i].erDiagnosis).hide();

			$j("#" + emergencyRoomRows[i].erDate).closest("tr").hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + emergencyRoomRows[i-1].addRowBtn2).show();
			if((i-1) > 0) {
				$j("#" + emergencyRoomRows[i-1].DelRowBtn2).show();
			}
		}
			i++;
	
	}

});

});