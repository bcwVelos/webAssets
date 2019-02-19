var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var totalRows = 10;
var inhibRows = new Array(totalRows);

inhibRows[0] = {
	iaDate : 'fld10050_137001_142035_span',
	sample : 'fld10050_136981_142015_span',
	studyPhase : 'fld10050_137011_142045_span',
	vwfF8b : 'fld10050_136931_141965_span',
	vwfGpibm : 'fld10050_136991_142025_span',
	vwfCb3 : 'fld10050_136971_142005_span',
	vwfCb4 : 'fld10050_136951_141985_span',
	addRowBtn : 'fld10050_136961_141995_id',
	delRowBtn : 'fld10050_137021_142055_id'
}

for (var i = 1; i < totalRows; i++) {
	inhibRows[i] = {
		iaDate : String(generateNextID(inhibRows[i-1].iaDate).concat("_span")),
		sample : String(generateNextID(inhibRows[i-1].sample).concat("_span")),
		studyPhase : String(generateNextID(inhibRows[i-1].studyPhase).concat("_span")),
		vwfF8b : String(generateNextID(inhibRows[i-1].vwfF8b).concat("_span")),
		vwfGpibm : String(generateNextID(inhibRows[i-1].vwfGpibm).concat("_span")),
		vwfCb3 : String(generateNextID(inhibRows[i-1].vwfCb3).concat("_span")),
		vwfCb4 : String(generateNextID(inhibRows[i-1].vwfCb4).concat("_span")),
		addRowBtn : String(generateNextID(inhibRows[i-1].addRowBtn).concat("_id")),
		delRowBtn : String(generateNextID(inhibRows[i-1].delRowBtn).concat("_id"))
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
		var rowTotal = inhibRows.length;
	
		// hide the delete Button in the first row - it should never be seen
		$j("#" + inhibRows[0].delRowBtn).hide();

	    // Start the for loop in the second row (array # 1) because the first row
	    // will always display.
		for ( var i = 1; i < rowTotal; i++) {
			
		// when the form loads, check to see if there is data populated in the
		// rows.
		var a = inhibRows[i].iaDate.indexOf("_span");
		var b = inhibRows[i].sample.indexOf("_span");
		
		//Check if the addtlOrgs dropdown has an option selected OR
		//Check if the Brand Name has data in it
		//If either of these are True - assume that there are values for all columns and check the next row.
		if ($j("#" + inhibRows[i].iaDate.substring(0, a)).val() != "")
		{
			//Hide the add button in the previous row. 
			$j("#" + inhibRows[i-1].addRowBtn).hide();
			$j("#" + inhibRows[i-1].delRowBtn).hide();
			
			if(i == totalRows){
				$j("#" + inhibRows[i].addRowBtn).hide();
			}
			
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			$j("#" + inhibRows[i-1].addRowBtn).show();
			if((i-1) > 0){
				$j("#" + inhibRows[i-1].delRowBtn).show();
			}
			
			//Hide this row.
			$j("#" + inhibRows[i].iaDate).closest("tr").hide();
			
		}
	}

	
$j(".addBtnIA").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = inhibRows[i].addRowBtn;
		if (rowName === labelId) {
			x = "True";
			//Hide the delete and add buttons in this row
			if(i < inhibRows.length) {
				if(i != (inhibRows.length-1)) {
					$j("#" + inhibRows[i].delRowBtn).hide();
				}
				$j("#" + inhibRows[i].addRowBtn).hide();

			}

			//Show all values in row where the add button was selected
			$j("#" + inhibRows[i+1].iaDate).closest("tr").show();
			$j("#" + inhibRows[i+1].iaDate).show();
			$j("#" + inhibRows[i+1].iaDate).siblings().show();
			$j("#" + inhibRows[i+1].sample).show();
			$j("#" + inhibRows[i+1].studyPhase).show();
			$j("#" + inhibRows[i+1].vwfF8b).show();
			$j("#" + inhibRows[i+1].vwfGpibm).show();
			$j("#" + inhibRows[i+1].vwfCb3).show();
			$j("#" + inhibRows[i+1].vwfCb4).show();
		} 
			i++;
		
		if((i+1) === (inhibRows.length -1)) {
                        $j("#" + inhibRows[i+1].addRowBtn).hide();
                  }
	}

});



$j(".deleteBtnIA").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var y;
	var i = 0;

	while (!Boolean(y)) {
		var rowName = inhibRows[i].delRowBtn;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			var a = inhibRows[i].iaDate.indexOf("_span");
			$j("#" + inhibRows[i].iaDate.substring(0, a)).val("");
			$j("#" + inhibRows[i].iaDate).hide();
			$j("#" + inhibRows[i].iaDate).siblings().hide();
			
			var b = inhibRows[i].sample.indexOf("_span");
			$j("#" + inhibRows[i].sample.substring(0, b)).val("");
			$j("#" + inhibRows[i].sample).hide();
			
			var c = inhibRows[i].studyPhase.indexOf("_span");
			var listUncheck = document.getElementsByName(inhibRows[i].studyPhase.substring(0, c));
			for (var j = 0 ; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + inhibRows[i].studyPhase).hide();
			
			var d = inhibRows[i].vwfF8b.indexOf("_span");
			$j("#" + inhibRows[i].vwfF8b.substring(0, d)).val("");
			$j("#" + inhibRows[i].vwfF8b).hide();
			
			var e = inhibRows[i].vwfGpibm.indexOf("_span");
			$j("#" + inhibRows[i].vwfGpibm.substring(0, e)).val("");
			$j("#" + inhibRows[i].vwfGpibm).hide();
			
			var f = inhibRows[i].vwfCb3.indexOf("_span");
			$j("#" + inhibRows[i].vwfCb3.substring(0, f)).val("");
			$j("#" + inhibRows[i].vwfCb3).hide();
			
			var g = inhibRows[i].vwfCb4.indexOf("_span");
			$j("#" + inhibRows[i].vwfCb4.substring(0, g)).val("");
			$j("#" + inhibRows[i].vwfCb4).hide();
			
			$j("#" + inhibRows[i].iaDate).closest("tr").hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + inhibRows[i-1].addRowBtn).show();
			if((i-1) > 0) {
				$j("#" + inhibRows[i-1].delRowBtn).show();
			}
		}
			i++;
	}

});

});



