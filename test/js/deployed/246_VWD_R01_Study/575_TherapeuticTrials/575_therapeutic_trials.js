var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var totalRows = 10;
var labRows = new Array(totalRows);

labRows[0] = {
	sample : 'fld10050_32469_35679_span',
	timeHrs : 'fld10050_32479_35689_span',
	fviii : 'fld10050_32509_35719_span',
	vwfag : 'fld10050_32519_35729_span',
	vwfrco : 'fld10050_32499_35709_span',
	vwfgpbm : 'fld10050_133124_138119_span',
	vwfpp: 'fld10050_32489_35699_span',
	vwfcb : 'fld10050_143159_148313_span',
	vwfMult : 'fld10050_32529_35739_span',
	addRowBtn : 'fld10050_32539_35749_id',
	delRowBtn : 'fld10050_32549_35759_id'
}

for (var i = 1; i < totalRows; i++) {
	labRows[i] = {
		sample : String(generateNextID(labRows[i-1].sample).concat("_span")),
		timeHrs : String(generateNextID(labRows[i-1].timeHrs).concat("_span")),
		fviii : String(generateNextID(labRows[i-1].fviii).concat("_span")),
		vwfag : String(generateNextID(labRows[i-1].vwfag).concat("_span")),
		vwfrco : String(generateNextID(labRows[i-1].vwfrco).concat("_span")),
		vwfgpbm : String(generateNextID(labRows[i-1].vwfgpbm).concat("_span")),
		vwfpp : String(generateNextID(labRows[i-1].vwfpp).concat("_span")),
		vwfcb : String(generateNextID(labRows[i-1].vwfcb).concat("_span")),
		vwfMult : String(generateNextID(labRows[i-1].vwfMult).concat("_span")),
		addRowBtn : String(generateNextID(labRows[i-1].addRowBtn).concat("_id")),
		delRowBtn : String(generateNextID(labRows[i-1].delRowBtn).concat("_id"))
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
	var rowTotal = labRows.length;
	
	// hide the delete Button in the first row - it should never be seen
	$j("#" + labRows[0].delRowBtn).hide();
	
		    // Start the for loop in the second row (array # 1) because the first row
	    // will always display.
		for ( var i = 1; i < rowTotal; i++) {
			
		// when the form loads, check to see if there is data populated in the
		// rows.
		var a = labRows[i].fviii.indexOf("_span");
		var b = labRows[i].vwfag.indexOf("_span");
		var c = labRows[i].vwfrco.indexOf("_span");
		var f = labRows[i].vwfgpbm.indexOf("_span");
		var d = labRows[i].vwfpp.indexOf("_span");
		var g = labRows[i].vwfcb.indexOf("_span");
		var e = labRows[i].vwfMult.indexOf("_span");		
		
		//Check if the Type dropdown has an option selected OR
		//Check if the Brand Name has data in it
		//If either of these are True - assume that there are values for all columns and check the next row.
		if ($j("#" + labRows[i].fviii.substring(0, a)).val() != "")
		{
			//Hide the add button in the previous row. 
			$j("#" + labRows[i-1].addRowBtn).hide();
			$j("#" + labRows[i-1].delRowBtn).hide();
			
			if(i == 9){
				$j("#" + labRows[i].addRowBtn).hide();
			}
			
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			$j("#" + labRows[i-1].addRowBtn).show();
			if((i-1) > 0){
				$j("#" + labRows[i-1].delRowBtn).show();
			}
			
			//Hide this row.
			$j("#" + labRows[i].sample).closest("tr").hide();
			
		}
	}
	alert("Hello 5");

});

