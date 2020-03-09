var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var totalRows = 10;
var labRows = new Array(totalRows);

labRows[0] = {
	sample : 'fld10050_32265_35473_span',
	timeHrs : 'fld10050_32275_35483_span',
	fviii : 'fld10050_32305_35513_span',
	vwfag : 'fld10050_32315_35523_span',
	vwfrco : 'fld10050_32295_35503_span',
	vwfgpbm : 'fld10050_133114_138109_span',
	vwfpp: 'fld10050_32285_35493_span',
	vwfcb : 'fld10050_143169_148323_span',
	vwfMult : 'fld10050_32325_35533_span',
	addRowBtn : 'fld10050_32335_35543_id',
	delRowBtn : 'fld10050_32345_35553_id'
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
		if ($j("#" + labRows[i].fviii.substring(0, a)).val() != "" ||
				$j("#" + labRows[i].vwfag.substring(0,b)).val() != "" ||
				$j("#" + labRows[i].vwfrco.substring(0,c)).val() != "" ||
				$j("#" + labRows[i].vwfpp.substring(0,d)).val() != "" ||
				$j("#" + labRows[i].vwfMult.substring(0,e)).val() != "" ||
				$j("#" + labRows[i].vwfgpbm.substring(0,f)).val() != "" ||
				$j("#" + labRows[i].vwfcb.substring(0,g)).val() != "")
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
	alert("Hello 6");


//******* BEGIN ADD BUTTON LISTENER ***************//
$j(".addBtn").click(function() {
	var parentLabel = $j(this).parent("label");
	var labelId = $j(parentLabel).attr("id");
	
	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = labRows[i].addRowBtn;
		if (rowName === labelId) {
			x = "True";
			//Hide the delete and add buttons in this row
			if(i < labRows.length) {
				if(i != (labRows.length-1)) {
					$j("#" + labRows[i].delRowBtn).hide();
				}
				$j("#" + labRows[i].addRowBtn).hide();

			}
					
			//Show all values in row where the add button was selected
			$j("#" + labRows[i+1].sample).closest("tr").show();
			$j("#" + labRows[i+1].sample).show();
			$j("#" + labRows[i+1].timeHrs).show();
			$j("#" + labRows[i+1].fviii).show();
			$j("#" + labRows[i+1].vwfag).show();
			$j("#" + labRows[i+1].vwfrco).show();
			$j("#" + labRows[i+1].vwfgpbm).show();
			$j("#" + labRows[i+1].vwfpp).show();
			$j("#" + labRows[i+1].vwfcb).show();
			$j("#" + labRows[i+1].vwfMult).show();

			if((i+1) < (labRows.length -1)) {
				$j("#" + labRows[i+1].addRowBtn).show();
			}

			if((i+1) === (labRows.length -1)) {
				$j("#" + labRows[i+1].addRowBtn).hide();
			} 			

		} 
			i++;
		
	}

});

//******* END ADD BUTTON LISTENER ***************//
	
//******* BEGIN DELETE BUTTON LISTENER ***************//

$j(".deleteBtn").click(function() {

	var parentLabelElement = $j(this).parent("label");
	var labelId = $j(parentLabelElement).attr("id");
	
	var y;
	var i = 0;

	while (!Boolean(y)) {
		var rowName = labRows[i].delRowBtn;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			var a = labRows[i].sample.indexOf("_span");
			$j("#" + labRows[i].sample.substring(0, a)).val("");
			$j("#" + labRows[i].sample).hide();

			var b = labRows[i].timeHrs.indexOf("_span");
			$j("#" + labRows[i].timeHrs.substring(0, b)).val("");
			$j("#" + labRows[i].timeHrs).hide();

			var d = labRows[i].fviii.indexOf("_span");
			$j("#" + labRows[i].fviii.substring(0, d)).val("");
			$j("#" + labRows[i].fviii).hide();

			var e = labRows[i].vwfag.indexOf("_span");
			$j("#" + labRows[i].vwfag.substring(0, e)).val("");
			$j("#" + labRows[i].vwfag).hide();

			var f = labRows[i].vwfrco.indexOf("_span");
			$j("#" + labRows[i].vwfrco.substring(0, f)).val("");
			$j("#" + labRows[i].vwfrco).hide();
			
			var j = labRows[i].vwfgpbm.indexOf("_span");
			$j("#" + labRows[i].vwfgpbm.substring(0, j)).val("");
			$j("#" + labRows[i].vwfgpbm).hide();
			
			var g = labRows[i].vwfpp.indexOf("_span");
			$j("#" + labRows[i].vwfpp.substring(0, g)).val("");
			$j("#" + labRows[i].vwfpp).hide();
			
			var k = labRows[i].vwfcb.indexOf("_span");
			$j("#" + labRows[i].vwfcb.substring(0, k)).val("");
			$j("#" + labRows[i].vwfcb).hide();
			
			var h = labRows[i].vwfMult.indexOf("_span");
			$j("#" + labRows[i].vwfMult.substring(0, h)).val("");
			$j("#" + labRows[i].vwfMult).hide();

			$j("#" + labRows[i].sample).closest("tr").hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + labRows[i-1].addRowBtn).show();
			if((i-1) > 0) {
				$j("#" + labRows[i-1].delRowBtn).show();
			}
		}
			i++;
		
	}

});
});

