var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var totalRows = 10;
var svSub = new Array(totalRows);

svSub[0] = {
	seqVar : 'fld10050_139292_145584_span',
	prtnChng : 'fld10050_139302_145594_span',
	dbSub : 'fld10050_139312_145604_span',
	svDate : 'fld10050_139322_145614_span',
	afm : 'fld10050_139332_145624_span',
	fm : 'fld10050_139342_145634_span',
	svClass : 'fld10050_139352_145644_span',
	cadd : 'fld10050_139362_145654_span',
	gnom : 'fld10050_139372_145664_span',
	addRowBtn : 'fld10050_139382_145674_id',
	delRowBtn : 'fld10050_139392_145684_id'
}

for (var i = 1; i < totalRows; i++) {
	svSub[i] = {
		seqVar : String(generateNextID(svSub[i-1].seqVar).concat("_span")),
		prtnChng : String(generateNextID(svSub[i-1].prtnChng).concat("_span")),
		dbSub : String(generateNextID(svSub[i-1].dbSub).concat("_span")),
		svDate : String(generateNextID(svSub[i-1].svDate).concat("_span")),
		afm : String(generateNextID(svSub[i-1].afm).concat("_span")),
		fm : String(generateNextID(svSub[i-1].fm).concat("_span")),
		svClass : String(generateNextID(svSub[i-1].svClass).concat("_span")),
		cadd : String(generateNextID(svSub[i-1].cadd).concat("_span")),
		gnom : String(generateNextID(svSub[i-1].gnom).concat("_span")),
		addRowBtn : String(generateNextID(svSub[i-1].addRowBtn).concat("_id")),
		delRowBtn : String(generateNextID(svSub[i-1].delRowBtn).concat("_id"))
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
		var rowTotal = svSub.length;
	
		// hide the delete Button in the first row - it should never be seen
		$j("#" + svSub[0].delRowBtn).hide();

	    // Start the for loop in the second row (array # 1) because the first row
	    // will always display.
		for ( var i = 1; i < rowTotal; i++) {
			
		// when the form loads, check to see if there is data populated in the
		// rows.
		var a = svSub[i].seqVar.indexOf("_span");
		
		//Check if the addtlOrgs dropdown has an option selected OR
		//Check if the Brand Name has data in it
		//If either of these are True - assume that there are values for all columns and check the next row.
		if ($j("#" + svSub[i].seqVar.substring(0, a)).val() != "")
		{
			//Hide the add button in the previous row. 
			$j("#" + svSub[i-1].addRowBtn).hide();
			$j("#" + svSub[i-1].delRowBtn).hide();
			
			if(i == totalRows){
				$j("#" + svSub[i].addRowBtn).hide();
			}
			
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			$j("#" + svSub[i-1].addRowBtn).show();
			if((i-1) > 0){
				$j("#" + svSub[i-1].delRowBtn).show();
			}
			
			//Hide this row.
			$j("#" + svSub[i].seqVar).closest("tr").hide();
			
		}
	}

	
$j(".addBtnSV").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = svSub[i].addRowBtn;
		if (rowName === labelId) {
			x = "True";
			//Hide the delete and add buttons in this row
			if(i < svSub.length) {
				if(i != (svSub.length-1)) {
					$j("#" + svSub[i].delRowBtn).hide();
				}
				$j("#" + svSub[i].addRowBtn).hide();

			}

			//Show all values in row where the add button was selected
			$j("#" + svSub[i+1].seqVar).closest("tr").show();
			$j("#" + svSub[i+1].seqVar).show();
			$j("#" + svSub[i+1].seqVar).siblings().show();
			$j("#" + svSub[i+1].prtnChng).show();
			$j("#" + svSub[i+1].dbSub).show();
			$j("#" + svSub[i+1].svDate).show();
			$j("#" + svSub[i+1].afm).show();
			$j("#" + svSub[i+1].fm).show();
			$j("#" + svSub[i+1].svClass).show();
			$j("#" + svSub[i+1].cadd).show();
			$j("#" + svSub[i+1].gnom).show();
		} 
			i++;
		
		if((i+1) === (svSub.length -1)) {
                        $j("#" + svSub[i+1].addRowBtn).hide();
                  }
	}

});



$j(".deleteBtnSV").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var y;
	var i = 0;

	while (!Boolean(y)) {
		var rowName = svSub[i].delRowBtn;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			var a = svSub[i].seqVar.indexOf("_span");
			$j("#" + svSub[i].seqVar.substring(0, a)).val("");
			$j("#" + svSub[i].seqVar).hide();
			$j("#" + svSub[i].seqVar).siblings().hide();
			
			var b = svSub[i].prtnChng.indexOf("_span");
			$j("#" + svSub[i].prtnChng.substring(0, b)).val("");
			$j("#" + svSub[i].prtnChng).hide();
			
			var c = svSub[i].dbSub.indexOf("_span");
			$j("#" + svSub[i].dbSub.substring(0, c)).val("Select an Option");
			$j("#" + svSub[i].dbSub).hide();
			
			var d = svSub[i].svDate.indexOf("_span");
			$j("#" + svSub[i].svDate.substring(0, d)).val("");
			$j("#" + svSub[i].svDate).hide();
			
			var e = svSub[i].afm.indexOf("_span");
			$j("#" + svSub[i].afm.substring(0, e)).val("");
			$j("#" + svSub[i].afm).hide();
			
			var f = svSub[i].fm.indexOf("_span");
			$j("#" + svSub[i].fm.substring(0, f)).val("");
			$j("#" + svSub[i].fm).hide();
			
			var g = svSub[i].svClass.indexOf("_span");
			$j("#" + svSub[i].svClass.substring(0, g)).val("Select an Option");
			$j("#" + svSub[i].svClass).hide();
			
			var h = svSub[i].cadd.indexOf("_span");
			$j("#" + svSub[i].cadd.substring(0, h)).val("");
			$j("#" + svSub[i].cadd).hide();
			
			var j = svSub[i].gnom.indexOf("_span");
			$j("#" + svSub[i].gnom.substring(0, j)).val("");
			$j("#" + svSub[i].gnom).hide();
			
			$j("#" + svSub[i].seqVar).closest("tr").hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + svSub[i-1].addRowBtn).show();
			if((i-1) > 0) {
				$j("#" + svSub[i-1].delRowBtn).show();
			}
		}
			i++;
	}

});

});



