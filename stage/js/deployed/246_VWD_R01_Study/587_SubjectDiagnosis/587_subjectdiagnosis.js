var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var totalRows = 15;
var fuDiag = new Array(totalRows);

fuDiag[0] = {
	fuDiagnosis : 'fld10050_126166_132028_span',
	fuStudyPhase : 'fld10050_126181_132043_span',
	fuDate : 'fld10050_126196_132058_span',
	addRowBtn : 'fld10050_126211_132073_id',
	delRowBtn : 'fld10050_126226_132088_id'
}

for (var i = 1; i < totalRows; i++) {
	fuDiag[i] = {
		fuDiagnosis : String(generateNextID(fuDiag[i-1].fuDiagnosis).concat("_span")),
		fuStudyPhase : String(generateNextID(fuDiag[i-1].fuStudyPhase).concat("_span")),
		fuDate : String(generateNextID(fuDiag[i-1].fuDate).concat("_span")),
		addRowBtn : String(generateNextID(fuDiag[i-1].addRowBtn).concat("_id")),
		delRowBtn : String(generateNextID(fuDiag[i-1].delRowBtn).concat("_id"))
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
		var rowTotal = fuDiag.length;
	
		// hide the delete Button in the first row - it should never be seen
		$j("#" + fuDiag[0].delRowBtn).hide();

	    // Start the for loop in the second row (array # 1) because the first row
	    // will always display.
		for ( var i = 1; i < rowTotal; i++) {
			
		// when the form loads, check to see if there is data populated in the
		// rows.
		var a = fuDiag[i].fuDiagnosis.indexOf("_span");
		
		//Check if the addtlOrgs dropdown has an option selected OR
		//Check if the Brand Name has data in it
		//If either of these are True - assume that there are values for all columns and check the next row.
		if ($j("#" + fuDiag[i].fuDiagnosis.substring(0, a)).val() != "")
		{
			//Hide the add button in the previous row. 
			$j("#" + fuDiag[i-1].addRowBtn).hide();
			$j("#" + fuDiag[i-1].delRowBtn).hide();
			
			if(i == totalRows){
				$j("#" + fuDiag[i].addRowBtn).hide();
			}
			
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			$j("#" + fuDiag[i-1].addRowBtn).show();
			if((i-1) > 0){
				$j("#" + fuDiag[i-1].delRowBtn).show();
			}
			
			//Hide this row.
			$j("#" + fuDiag[i].fuDiagnosis).closest("tr").hide();
			
		}
	}

	
$j(".addBtn").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = fuDiag[i].addRowBtn;
		if (rowName === labelId) {
			x = "True";
			//Hide the delete and add buttons in this row
			if(i < fuDiag.length) {
				if(i != (fuDiag.length-1)) {
					$j("#" + fuDiag[i].delRowBtn).hide();
				}
				$j("#" + fuDiag[i].addRowBtn).hide();

			}
			
			//Show all values in row where the add button was selected
			$j("#" + fuDiag[i+1].fuDiagnosis).closest("tr").show();
			$j("#" + fuDiag[i+1].fuDiagnosis).show();
			$j("#" + fuDiag[i+1].fuDiagnosis).siblings().show();
			$j("#" + fuDiag[i+1].fuStudyPhase).show();
			$j("#" + fuDiag[i+1].fuDate).show();
		} 
			i++;
		
		if((i+1) === (fuDiag.length -1)) {
                        $j("#" + fuDiag[i+1].addRowBtn).hide();
                  }
	}

});



$j(".deleteBtn").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var y;
	var i = 0;

	while (!Boolean(y)) {
		var rowName = fuDiag[i].delRowBtn;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			var a = fuDiag[i].fuDiagnosis.indexOf("_span");
			$j("#" + fuDiag[i].fuDiagnosis.substring(0, a)).val("");
			$j("#" + fuDiag[i].fuDiagnosis).hide();
			$j("#" + fuDiag[i].fuDiagnosis).siblings().hide();
			
			var b = fuDiag[i].fuStudyPhase.indexOf("_span");
			$j("#" + fuDiag[i].fuStudyPhase.substring(0, b)).val("");
			$j("#" + fuDiag[i].fuStudyPhase).hide();
			
			var c = fuDiag[i].fuDate.indexOf("_span");
			$j("#" + fuDiag[i].fuDate.substring(0, c)).val("");
			$j("#" + fuDiag[i].fuDate).hide();
			
			$j("#" + fuDiag[i].fuDiagnosis).closest("tr").hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + fuDiag[i-1].addRowBtn).show();
			if((i-1) > 0) {
				$j("#" + fuDiag[i-1].delRowBtn).show();
			}
		}
			i++;
	}

});

});



