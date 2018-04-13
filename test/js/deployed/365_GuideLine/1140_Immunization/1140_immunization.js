var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var totalRows = 20;
var immuRows = new Array(totalRows);

immuRows[0] = {
	vaccineName : 'fld10050_130417_135352_span',  
	injectionSite : 'fld10050_130497_135432_span',
	addRowBtn1 : 'fld10050_130437_135372_id',
	delRowBtn1 : 'fld10050_130457_135392_id'
}

for (var i = 1; i < totalRows; i++) {
	immuRows[i] = {
		vaccineName : String(generateNextID(immuRows[i-1].vaccineName).concat("_span")),
		injectionSite : String(generateNextID(immuRows[i-1].injectionSite).concat("_span")),
		addRowBtn1 : String(generateNextID(immuRows[i-1].addRowBtn1).concat("_id")),
		delRowBtn1 : String(generateNextID(immuRows[i-1].delRowBtn1).concat("_id"))
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
	
		//$j("#" + immuRows[0].vaccineName.substring(0, 20)).val("123456");
	
		//hide the comments label- never want to see it
		$j('td:contains("Comments")').hide();
		$j('td:contains("Space Break")').hide();
	
		//Check to see how many medications are available for the page
		var rowTotal = immuRows.length;
	
		// hide the delete Button in the first row - it should never be seen
		$j("#" + immuRows[0].delRowBtn1).hide();


	    // Start the for loop in the second row (array # 1) because the first row
	    // will always display.
		for ( var i = 1; i < rowTotal; i++) {
			
		// when the form loads, check to see if there is data populated in the
		// rows.
		var a = immuRows[i].vaccineName.indexOf("_span");
		var b = immuRows[i].injectionSite.indexOf("_span");
		
		//Check if the addtlOrgs dropdown has an option selected OR
		//Check if the Brand Name has data in it
		//If either of these are True - assume that there are values for all columns and check the next row.
		if ($j("#" + immuRows[i].vaccineName.substring(0, a)).val() != "")
		{
			//Hide the add button in the previous row. 
			$j("#" + immuRows[i-1].addRowBtn1).hide();
			$j("#" + immuRows[i-1].delRowBtn1).hide();
			
			if(i == 19){
				$j("#" + immuRows[i].addRowBtn1).hide();
			}
			
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			$j("#" + immuRows[i-1].addRowBtn1).show();
			if((i-1) > 0){
				$j("#" + immuRows[i-1].delRowBtn1).show();
			}
			
			//Hide this row.
			$j("#" + immuRows[i].vaccineName).closest("tr").hide();
			
		}
	}

	
$j(".addBtn1").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = immuRows[i].addRowBtn1;
		if (rowName === labelId) {
			x = "True";
			//Hide the delete and add buttons in this row
			if(i < immuRows.length) {
				if(i != (immuRows.length-1)) {
					$j("#" + immuRows[i].delRowBtn1).hide();
				}
				$j("#" + immuRows[i].addRowBtn1).hide();

			}
					
			//Show all values in row where the add button was selected
			$j("#" + immuRows[i+1].vaccineName).closest("tr").show();
			$j("#" + immuRows[i+1].vaccineName).show();
			$j("#" + immuRows[i+1].vaccineName).siblings().show();
			$j("#" + immuRows[i+1].injectionSite).show();
			
		} 
			i++;
		
		if((i+1) === (immuRows.length -1)) {
                        $j("#" + immuRows[i+1].addRowBtn1).hide();
                  }
	}

});



$j(".deleteBtn1").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var y;
	var i = 0;

	while (!Boolean(y)) {
		var rowName = immuRows[i].delRowBtn1;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			var a = immuRows[i].vaccineName.indexOf("_span");
			$j("#" + immuRows[i].vaccineName.substring(0, a)).val("");
			$j("#" + immuRows[i].vaccineName).hide();
			$j("#" + immuRows[i].vaccineName).siblings().hide();

			var b = immuRows[i].injectionSite.indexOf("_span");
			$j("#" + immuRows[i].injectionSite.substring(0, b)).val("");
			$j("#" + immuRows[i].injectionSite).hide();

			$j("#" + immuRows[i].vaccineName).closest("tr").hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + immuRows[i-1].addRowBtn1).show();
			if((i-1) > 0) {
				$j("#" + immuRows[i-1].delRowBtn1).show();
			}
		}
			i++;
	
	}

});

});



