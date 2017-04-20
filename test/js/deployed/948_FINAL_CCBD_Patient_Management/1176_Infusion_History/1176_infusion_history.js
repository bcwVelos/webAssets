var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var totalRows = 31;
var infusionRows = new Array(totalRows);

infusionRows[0] = {
	infusionDate : 'fld10050_165498_170044_span',
	quantity : 'fld10050_165374_169920_span',
	bleedCause : 'fld10050_165436_169982_span',
	bleedType : 'fld10050_165622_170168_span',
	uniqueInfusion : 'fld10050_165467_170013_span',
	infusionType : 'fld10050_165405_169951_span',
	infusionLocation : 'fld10050_165343_169889_span',
	bleedSite : 'fld10050_165591_170137_span',
	infusionProduct : 'fld10050_165529_170075_span',
	addRowBtn : 'fld10050_165312_169858_id',
	delRowBtn : 'fld10050_165560_170106_id'
}

for (var i = 1; i < totalRows; i++) {
	infusionRows[i] = {
		infusionDate : String(generateNextID(infusionRows[i-1].infusionDate).concat("_span")),
		quantity : String(generateNextID(infusionRows[i-1].quantity).concat("_span")),
		bleedCause : String(generateNextID(infusionRows[i-1].bleedCause).concat("_span")),
		bleedType : String(generateNextID(infusionRows[i-1].bleedType).concat("_span")),
		uniqueInfusion : String(generateNextID(infusionRows[i-1].uniqueInfusion).concat("_span")),
		infusionType : String(generateNextID(infusionRows[i-1].infusionType).concat("_span")),
		infusionLocation : String(generateNextID(infusionRows[i-1].infusionLocation).concat("_span")),
		bleedSite : String(generateNextID(infusionRows[i-1].bleedSite).concat("_span")),
		infusionProduct : String(generateNextID(infusionRows[i-1].infusionProduct).concat("_span")),
		addRowBtn : String(generateNextID(infusionRows[i-1].addRowBtn).concat("_id")),
		delRowBtn : String(generateNextID(infusionRows[i-1].delRowBtn).concat("_id"))
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
		alert("HELLO");
		//hide the comments label- never want to see it
		$j('td:contains("Comments")').hide();
	
		//Check to see how many medications are available for the page
		var rowTotal = infusionRows.length;
	
		// hide the delete Button in the first row - it should never be seen
		$j("#" + infusionRows[0].delRowBtn).hide();

	    // Start the for loop in the second row (array # 1) because the first row
	    // will always display.
		for ( var i = 1; i < rowTotal; i++) {
			
		// when the form loads, check to see if there is data populated in the
		// rows.
		var a = infusionRows[i].infusionDate.indexOf("_span");
		var b = infusionRows[i].quantity.indexOf("_span");
		
		//Check if the addtlOrgs dropdown has an option selected OR
		//Check if the Brand Name has data in it
		//If either of these are True - assume that there are values for all columns and check the next row.
		if ($j("#" + infusionRows[i].infusionDate.substring(0, a)).val() != "")
		{
			//Hide the add button in the previous row. 
			$j("#" + infusionRows[i-1].addRowBtn).hide();
			$j("#" + infusionRows[i-1].delRowBtn).hide();
			
			if(i == 31){
				$j("#" + infusionRows[i].addRowBtn).hide();
			}
			
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			$j("#" + infusionRows[i-1].addRowBtn).show();
			if((i-1) > 0){
				$j("#" + infusionRows[i-1].delRowBtn).show();
			}
			
			//Hide this row.
			$j("#" + infusionRows[i].infusionDate).closest("tr").hide();
			
		}
	}

/*	
$j(".addBtn").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = infusionRows[i].addRowBtn;
		if (rowName === labelId) {
			x = "True";
			//Hide the delete and add buttons in this row
			if(i < infusionRows.length) {
				if(i != (infusionRows.length-1)) {
					$j("#" + infusionRows[i].delRowBtn).hide();
				}
				$j("#" + infusionRows[i].addRowBtn).hide();

			}
					
			//Show all values in row where the add button was selected
			$j("#" + infusionRows[i+1].addtlOrgs).closest("tr").show();
			$j("#" + infusionRows[i+1].addtlOrgs).show();
			$j("#" + infusionRows[i+1].addtlOrgs).siblings().show();
			$j("#" + infusionRows[i+1].accessLevel).show();
			
		} 
			i++;
		
		if((i+1) === (infusionRows.length -1)) {
                        $j("#" + infusionRows[i+1].addRowBtn).hide();
                  }
	}

});



$j(".deleteBtn").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var y;
	var i = 0;

	while (!Boolean(y)) {
		var rowName = infusionRows[i].delRowBtn;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			var a = infusionRows[i].addtlOrgs.indexOf("_span");
			$j("#" + infusionRows[i].addtlOrgs.substring(0, a)).val("");
			$j("#" + infusionRows[i].addtlOrgs).hide();
			$j("#" + infusionRows[i].addtlOrgs).siblings().hide();

			var b = infusionRows[i].accessLevel.indexOf("_span");
			var listUncheck = document.getElementsByName(infusionRows[i].accessLevel.substring(0, b));
			for (var j = 0 ; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + infusionRows[i].accessLevel).hide();

			$j("#" + infusionRows[i].addtlOrgs).closest("tr").hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + infusionRows[i-1].addRowBtn).show();
			if((i-1) > 0) {
				$j("#" + infusionRows[i-1].delRowBtn).show();
			}
		}
			i++;
	
	}

});*/

});



