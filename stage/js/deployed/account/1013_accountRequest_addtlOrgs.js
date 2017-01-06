alert("hello");

var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var totalRows = 10;
var addtlOrgsRows = new Array(totalRows);

addtlOrgsRows[0] = {
	addtlOrgs : 'fld10050_117593_122039_span',  
	accessLevel : 'fld10050_117694_122140_span',
	addRowBtn : 'fld10050_117391_121837_id',
	delRowBtn : 'fld10050_117492_121938_id'
}

for (var i = 1; i < totalRows; i++) {
	addtlOrgsRows[i] = {
		addtlOrgs : String(generateNextID(addtlOrgsRows[i-1].addtlOrgs).concat("_span")),
		accessLevel : String(generateNextID(addtlOrgsRows[i-1].accessLevel).concat("_span")),
		addRowBtn : String(generateNextID(addtlOrgsRows[i-1].addRowBtn).concat("_id")),
		delRowBtn : String(generateNextID(addtlOrgsRows[i-1].delRowBtn).concat("_id"))
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
		$j('td:contains("Space Break")').hide();
	
		//Check to see how many medications are available for the page
		var rowTotal = addtlOrgsRows.length;
	
		// hide the delete Button in the first row - it should never be seen
		$j("#" + addtlOrgsRows[0].delRowBtn).hide();


	    // Start the for loop in the second row (array # 1) because the first row
	    // will always display.
		for ( var i = 1; i < rowTotal; i++) {
			
		// when the form loads, check to see if there is data populated in the
		// rows.
		var a = addtlOrgsRows[i].addtlOrgs.indexOf("_span");
		var b = addtlOrgsRows[i].accessLevel.indexOf("_span");
		
		//Check if the addtlOrgs dropdown has an option selected OR
		//Check if the Brand Name has data in it
		//If either of these are True - assume that there are values for all columns and check the next row.
		if ($j("#" + addtlOrgsRows[i].addtlOrgs.substring(0, a) + " option:selected").text() != "Select an Option") //||
		//$j("#" + addtlOrgsRows[i].accessLevel.substring(0, b)).val() != "")
		{
			//Hide the add button in the previous row. 
			$j("#" + addtlOrgsRows[i-1].addRowBtn).hide();
			$j("#" + addtlOrgsRows[i-1].delRowBtn).hide();
			
			if(i == 9){
				$j("#" + addtlOrgsRows[i].addRowBtn).hide();
			}
			
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			$j("#" + addtlOrgsRows[i-1].addRowBtn).show();
			if((i-1) > 0){
				$j("#" + addtlOrgsRows[i-1].delRowBtn).show();
			}
			
			//Hide this row.
			$j("#" + addtlOrgsRows[i].addtlOrgs).closest("tr").hide();
			
		}
	}

	
$j(".addBtn").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = addtlOrgsRows[i].addRowBtn;
		if (rowName === labelId) {
			x = "True";
			//Hide the delete and add buttons in this row
			if(i < addtlOrgsRows.length) {
				if(i != (addtlOrgsRows.length-1)) {
					$j("#" + addtlOrgsRows[i].delRowBtn).hide();
				}
				$j("#" + addtlOrgsRows[i].addRowBtn).hide();

			}
					
			//Show all values in row where the add button was selected
			$j("#" + addtlOrgsRows[i+1].addtlOrgs).closest("tr").show();
			$j("#" + addtlOrgsRows[i+1].addtlOrgs).show();
			$j("#" + addtlOrgsRows[i+1].addtlOrgs).siblings().show();
			$j("#" + addtlOrgsRows[i+1].accessLevel).show();
			
		} 
			i++;
		
		if((i+1) === (addtlOrgsRows.length -1)) {
                        $j("#" + addtlOrgsRows[i+1].addRowBtn).hide();
                  }
	}

});



$j(".deleteBtn").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var y;
	var i = 0;

	while (!Boolean(y)) {
		var rowName = addtlOrgsRows[i].delRowBtn;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			var a = addtlOrgsRows[i].addtlOrgs.indexOf("_span");
			$j("#" + addtlOrgsRows[i].addtlOrgs.substring(0, a)).val("");
			$j("#" + addtlOrgsRows[i].addtlOrgs).hide();
			$j("#" + addtlOrgsRows[i].addtlOrgs).siblings().hide();

			var b = addtlOrgsRows[i].accessLevel.indexOf("_span");
			$j("#" + addtlOrgsRows[i].accessLevel.substring(0, b)).val("");
			$j("#" + addtlOrgsRows[i].accessLevel).hide();

			$j("#" + addtlOrgsRows[i].addtlOrgs).closest("tr").hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + addtlOrgsRows[i-1].addRowBtn).show();
			if((i-1) > 0) {
				$j("#" + addtlOrgsRows[i-1].delRowBtn).show();
			}
		}
			i++;
	
	}

});

});



