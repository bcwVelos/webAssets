var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var totalthrombosisRows = 10;
var thrombosisRows = new Array(totalthrombosisRows);

thrombosisRows[0] = {
	location : 'fld10050_129307_135351_span',
	AddRowBtn : 'fld10050_129407_135451_id',
	DelRowBtn : 'fld10050_129457_135501_id'
}

for (var i = 1; i < totalthrombosisRows; i++) {
	thrombosisRows[i] = {
		location : String(generateNextID(thrombosisRows[i-1].location).concat("_span")),
		AddRowBtn : String(generateNextID(thrombosisRows[i-1].AddRowBtn).concat("_id")),
		DelRowBtn : String(generateNextID(thrombosisRows[i-1].DelRowBtn).concat("_id"))
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
	
		//$j("#" + thrombosisRows[0].location.substring(0, 20)).val("123456");
	
		//hide the comments label- never want to see it
		$j('td:contains("Comments")').hide();
		$j('td:contains("Space Break")').hide();
	
		//Check to see how many medications are available for the page
		var rowThrombosis = thrombosisRows.length;
	
		// hide the delete Button in the first row - it should never be seen
		$j("#" + thrombosisRows[0].DelRowBtn).hide();


	    // Start the for loop in the second row (array # 1) because the first row
	    // will always display.
		for ( var i = 1; i < rowThrombosis; i++) {
			
		// when the form loads, check to see if there is data populated in the
		// rows.
		var a = thrombosisRows[i].location.indexOf("_span");
		
		//Check if the addtlOrgs dropdown has an option selected OR
		//Check if the Brand Name has data in it
		//If either of these are True - assume that there are values for all columns and check the next row.
		if ($j("#" + thrombosisRows[i].location.substring(0, a)).val() != "")
		{
			//Hide the add button in the previous row. 
			$j("#" + thrombosisRows[i-1].AddRowBtn).hide();
			$j("#" + thrombosisRows[i-1].DelRowBtn).hide();
			
			if(i == 49){
				$j("#" + thrombosisRows[i].AddRowBtn).hide();
			}
			
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			$j("#" + thrombosisRows[i-1].AddRowBtn).show();
			if((i-1) > 0){
				$j("#" + thrombosisRows[i-1].DelRowBtn).show();
			}
			
			//Hide this row.
			$j("#" + thrombosisRows[i].location).closest("tr").hide();
			
		}
	}

	
$j(".addBtn").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = thrombosisRows[i].AddRowBtn;
		if (rowName === labelId) {
			x = "True";
			//Hide the delete and add buttons in this row
			if(i < thrombosisRows.length) {
				if(i != (thrombosisRows.length-1)) {
					$j("#" + thrombosisRows[i].DelRowBtn).hide();
				}
				$j("#" + thrombosisRows[i].AddRowBtn).hide();

			}
					
			//Show all values in row where the add button was selected
			$j("#" + thrombosisRows[i+1].location).closest("tr").show();
			$j("#" + thrombosisRows[i+1].location).show();
			$j("#" + thrombosisRows[i+1].location).siblings().show();
			
		} 
			i++;
		
		if((i+1) === (thrombosisRows.length -1)) {
                        $j("#" + thrombosisRows[i+1].AddRowBtn).hide();
                  }
	}

});



$j(".deleteBtn").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var y;
	var i = 0;

	while (!Boolean(y)) {
		var rowName = thrombosisRows[i].DelRowBtn;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			var a = thrombosisRows[i].location.indexOf("_span");
			$j("#" + thrombosisRows[i].location.substring(0, a)).val("");
			$j("#" + thrombosisRows[i].location).hide();
			$j("#" + thrombosisRows[i].location).siblings().hide();

			$j("#" + thrombosisRows[i].location).closest("tr").hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + thrombosisRows[i-1].AddRowBtn).show();
			if((i-1) > 0) {
				$j("#" + thrombosisRows[i-1].DelRowBtn).show();
			}
		}
			i++;
	
	}

});

});



