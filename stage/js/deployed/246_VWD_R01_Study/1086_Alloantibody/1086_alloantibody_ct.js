var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var totalRows = 10;
var ctRows = new Array(totalRows);

ctRows[0] = {
	ctDate : 'fld10050_124920_130720_span',
	sample : 'fld10050_124890_130690_span',
	studyPhase : 'fld10050_124930_130730_span',
	iggIgm : 'fld10050_124870_130670_span',
	confirmed : 'fld10050_124900_130700_span',
	lowestTiter : 'fld10050_124910_130710_span',
	addRowBtn : 'fld10050_124950_130750_id',
	delRowBtn : 'fld10050_124940_130740_id'
}

for (var i = 1; i < totalRows; i++) {
	ctRows[i] = {
		ctDate : String(generateNextID(ctRows[i-1].ctDate).concat("_span")),
		sample : String(generateNextID(ctRows[i-1].sample).concat("_span")),
		studyPhase : String(generateNextID(ctRows[i-1].studyPhase).concat("_span")),
		iggIgm : String(generateNextID(ctRows[i-1].iggIgm).concat("_span")),
		confirmed : String(generateNextID(ctRows[i-1].confirmed).concat("_span")),
		lowestTiter : String(generateNextID(ctRows[i-1].lowestTiter).concat("_span")),
		addRowBtn : String(generateNextID(ctRows[i-1].addRowBtn).concat("_id")),
		delRowBtn : String(generateNextID(ctRows[i-1].delRowBtn).concat("_id"))
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
		var rowTotal = ctRows.length;
	
		// hide the delete Button in the first row - it should never be seen
		$j("#" + ctRows[0].delRowBtn).hide();

	    // Start the for loop in the second row (array # 1) because the first row
	    // will always display.
		for ( var i = 1; i < rowTotal; i++) {
			
		// when the form loads, check to see if there is data populated in the
		// rows.
		var a = ctRows[i].ctDate.indexOf("_span");
		var b = ctRows[i].sample.indexOf("_span");
		
		//Check if the addtlOrgs dropdown has an option selected OR
		//Check if the Brand Name has data in it
		//If either of these are True - assume that there are values for all columns and check the next row.
		if ($j("#" + ctRows[i].ctDate.substring(0, a)).val() != "")
		{
			//Hide the add button in the previous row. 
			$j("#" + ctRows[i-1].addRowBtn).hide();
			$j("#" + ctRows[i-1].delRowBtn).hide();
			
			if(i == totalRows){
				$j("#" + ctRows[i].addRowBtn).hide();
			}
			
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			$j("#" + ctRows[i-1].addRowBtn).show();
			if((i-1) > 0){
				$j("#" + ctRows[i-1].delRowBtn).show();
			}
			
			//Hide this row.
			$j("#" + ctRows[i].ctDate).closest("tr").hide();
			
		}
	}

	
$j(".addBtnCT").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = ctRows[i].addRowBtn;
		if (rowName === labelId) {
			x = "True";
			//Hide the delete and add buttons in this row
			if(i < ctRows.length) {
				if(i != (ctRows.length-1)) {
					$j("#" + ctRows[i].delRowBtn).hide();
				}
				$j("#" + ctRows[i].addRowBtn).hide();

			}
			
			//Show all values in row where the add button was selected
			$j("#" + ctRows[i+1].ctDate).closest("tr").show();
			$j("#" + ctRows[i+1].ctDate).show();
			$j("#" + ctRows[i+1].ctDate).siblings().show();
			$j("#" + ctRows[i+1].sample).show();
			$j("#" + ctRows[i+1].studyPhase).show();
			$j("#" + ctRows[i+1].iggIgm).show();
			$j("#" + ctRows[i+1].confirmed).show();
			$j("#" + ctRows[i+1].lowestTiter).show();
		} 
			i++;
		
		if((i+1) === (ctRows.length -1)) {
                        $j("#" + ctRows[i+1].addRowBtn).hide();
                  }
	}

});



$j(".deleteBtnCT").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var y;
	var i = 0;

	while (!Boolean(y)) {
		var rowName = ctRows[i].delRowBtn;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			var a = ctRows[i].ctDate.indexOf("_span");
			$j("#" + ctRows[i].ctDate.substring(0, a)).val("");
			$j("#" + ctRows[i].ctDate).hide();
			$j("#" + ctRows[i].ctDate).siblings().hide();
			
			var b = ctRows[i].sample.indexOf("_span");
			$j("#" + ctRows[i].sample.substring(0, b)).val("");
			$j("#" + ctRows[i].sample).hide();
			
			var c = ctRows[i].studyPhase.indexOf("_span");
			var listUncheck = document.getElementsByName(ctRows[i].studyPhase.substring(0, c));
			for (var j = 0 ; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + ctRows[i].studyPhase).hide();
			
			var d = ctRows[i].iggIgm.indexOf("_span");
			var listUncheck = document.getElementsByName(ctRows[i].iggIgm.substring(0, d));
			for (var j = 0 ; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + ctRows[i].iggIgm).hide();
			
			var e = ctRows[i].confirmed.indexOf("_span");
			var listUncheck = document.getElementsByName(ctRows[i].confirmed.substring(0, e));
			for (var j = 0 ; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + ctRows[i].confirmed).hide();
			
			var f = ctRows[i].lowestTiter.indexOf("_span");
			$j("#" + ctRows[i].lowestTiter.substring(0, f)).val("");
			$j("#" + ctRows[i].lowestTiter).hide();
			
			$j("#" + ctRows[i].ctDate).closest("tr").hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + ctRows[i-1].addRowBtn).show();
			if((i-1) > 0) {
				$j("#" + ctRows[i-1].delRowBtn).show();
			}
		}
			i++;
	}

});

});



