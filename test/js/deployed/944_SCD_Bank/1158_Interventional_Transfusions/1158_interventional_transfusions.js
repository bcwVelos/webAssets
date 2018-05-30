var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var totalRows = 20;
var intTransfusions = new Array(totalRows);

intTransfusions[0] = {
	transfusionDate : 'fld10050_132255_137227_span',
	transfusionIndication : 'fld10050_132155_137127_span',	
	transfusionUnits : 'fld10050_132175_137147_span',
	transfusionType : 'fld10050_132195_137167_span',
	addRowBtn : 'fld10050_132215_137187_id',
	delRowBtn : 'fld10050_132235_137207_id'
}

for (var i = 1; i < totalRows; i++) {
	intTransfusions[i] = {
		transfusionDate : String(generateNextID(intTransfusions[i-1].transfusionDate).concat("_span")),
		transfusionIndication : String(generateNextID(intTransfusions[i-1].transfusionIndication).concat("_span")),
		transfusionUnits : String(generateNextID(intTransfusions[i-1].transfusionUnits).concat("_span")),
		transfusionType : String(generateNextID(intTransfusions[i-1].transfusionType).concat("_span")),
		addRowBtn : String(generateNextID(intTransfusions[i-1].addRowBtn).concat("_id")),
		delRowBtn : String(generateNextID(intTransfusions[i-1].delRowBtn).concat("_id"))
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
	
		//$j("#" + intTransfusions[0].transfusionDate.substring(0, 20)).val("123456");
	
		//hide the comments label- never want to see it
		$j('td:contains("Comments")').hide();
		$j('td:contains("Space Break")').hide();
	
		//Check to see how many medications are available for the page
		var rowTotal = intTransfusions.length;
	
		// hide the delete Button in the first row - it should never be seen
		$j("#" + intTransfusions[0].delRowBtn).hide();


	    // Start the for loop in the second row (array # 1) because the first row
	    // will always display.
		for ( var i = 1; i < rowTotal; i++) {
			
		// when the form loads, check to see if there is data populated in the
		// rows.
		var a = intTransfusions[i].transfusionDate.indexOf("_span");
		
		//Check if the addtlOrgs dropdown has an option selected OR
		//Check if the Brand Name has data in it
		//If either of these are True - assume that there are values for all columns and check the next row.
		if ($j("#" + intTransfusions[i].transfusionDate.substring(0, a)).val() != "")
		{
			//Hide the add button in the previous row. 
			$j("#" + intTransfusions[i-1].addRowBtn).hide();
			$j("#" + intTransfusions[i-1].delRowBtn).hide();
			
			if(i == 19){
				$j("#" + intTransfusions[i].addRowBtn).hide();
			}
			
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			$j("#" + intTransfusions[i-1].addRowBtn).show();
			if((i-1) > 0){
				$j("#" + intTransfusions[i-1].delRowBtn).show();
			}
			
			//Hide this row.
			$j("#" + intTransfusions[i].transfusionDate).closest("tr").hide();
			
		}
	}

	
$j(".addBtn").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = intTransfusions[i].addRowBtn;
		if (rowName === labelId) {
			x = "True";
			//Hide the delete and add buttons in this row
			if(i < intTransfusions.length) {
				if(i != (intTransfusions.length-1)) {
					$j("#" + intTransfusions[i].delRowBtn).hide();
				}
				$j("#" + intTransfusions[i].addRowBtn).hide();

			}
					
			//Show all values in row where the add button was selected
			$j("#" + intTransfusions[i+1].transfusionDate).closest("tr").show();
			$j("#" + intTransfusions[i+1].transfusionDate).show();
			$j("#" + intTransfusions[i+1].transfusionDate).siblings().show();
			$j("#" + intTransfusions[i+1].transfusionIndication).show();
			$j("#" + intTransfusions[i+1].transfusionUnits).show();
			$j("#" + intTransfusions[i+1].transfusionType).show();
			
		} 
			i++;
		
		if((i+1) === (intTransfusions.length -1)) {
                        $j("#" + intTransfusions[i+1].addRowBtn).hide();
                  }
	}

});



$j(".deleteBtn").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var y;
	var i = 0;

	while (!Boolean(y)) {
		var rowName = intTransfusions[i].delRowBtn;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			var a = intTransfusions[i].transfusionDate.indexOf("_span");
			$j("#" + intTransfusions[i].transfusionDate.substring(0, a)).val("");
			$j("#" + intTransfusions[i].transfusionDate).hide();
			$j("#" + intTransfusions[i].transfusionDate).siblings().hide();

			var b = intTransfusions[i].transfusionIndication.indexOf("_span");
			$j("#" + intTransfusions[i].transfusionIndication.substring(0, b)).val("");
			$j("#" + intTransfusions[i].transfusionIndication).hide();
			
			var c = intTransfusions[i].transfusionUnits.indexOf("_span");
			$j("#" + intTransfusions[i].transfusionUnits.substring(0, c)).val("");
			$j("#" + intTransfusions[i].transfusionUnits).hide();
			
			var d = intTransfusions[i].transfusionType.indexOf("_span");
			$j("#" + intTransfusions[i].transfusionType.substring(0, d)).val("Select an Option");
			$j("#" + intTransfusions[i].transfusionType).hide();

			$j("#" + intTransfusions[i].transfusionDate).closest("tr").hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + intTransfusions[i-1].addRowBtn).show();
			if((i-1) > 0) {
				$j("#" + intTransfusions[i-1].delRowBtn).show();
			}
		}
			i++;
	
	}

});

});



