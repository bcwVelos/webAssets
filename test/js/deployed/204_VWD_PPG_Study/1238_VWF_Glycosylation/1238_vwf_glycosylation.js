var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var totalRows = 11;
var glycoRows = new Array(totalRows);

glycoRows[0] = {
	drawDate : 'fld10050_143670_148847_span',
	visit : 'fld10050_143681_148858_span',
	vwfag : 'fld10050_143692_148869_span',
	rca : 'fld10050_143703_148880_span',
	eel : 'fld10050_143714_148891_span',
	eca : 'fld10050_143725_148902_span',
	malone : 'fld10050_143516_148693_span',
	phae : 'fld10050_143527_148704_span',
	phal : 'fld10050_143538_148715_span',
	ptl : 'fld10050_143549_148726_span',
	sba : 'fld10050_143560_148737_span',
	stl : 'fld10050_143571_148748_span',
	wga : 'fld10050_143582_148759_span',
	sna : 'fld10050_143593_148770_span',
	aal : 'fld10050_143604_148781_span',
	uea : 'fld10050_143615_148792_span',
	psa : 'fld10050_143626_148803_span',
	maltwo : 'fld10050_143637_148814_span',
	npl : 'fld10050_143648_148825_span',
	notes : 'fld10050_143659_148836_id',
	addRowBtn : 'fld10050_143736_148913_id',
	delRowBtn : 'fld10050_143747_148924_id',
	spaceBreak: 'fld10050_143758_148935_id'
}

for (var i = 1; i < totalRows; i++) {
	glycoRows[i] = {
		drawDate : String(generateNextID(glycoRows[i-1].drawDate).concat("_span")),
		visit : String(generateNextID(glycoRows[i-1].visit).concat("_span")),
		vwfag : String(generateNextID(glycoRows[i-1].vwfag).concat("_span")),
		rca : String(generateNextID(glycoRows[i-1].rca).concat("_span")),
		eel : String(generateNextID(glycoRows[i-1].eel).concat("_span")),
		eca : String(generateNextID(glycoRows[i-1].eca).concat("_span")),
		malone : String(generateNextID(glycoRows[i-1].malone).concat("_span")),
		phae : String(generateNextID(glycoRows[i-1].phae).concat("_span")),
		phal : String(generateNextID(glycoRows[i-1].phal).concat("_span")),
		ptl : String(generateNextID(glycoRows[i-1].ptl).concat("_span")),
		sba : String(generateNextID(glycoRows[i-1].sba).concat("_span")),
		stl : String(generateNextID(glycoRows[i-1].stl).concat("_span")),
		wga : String(generateNextID(glycoRows[i-1].wga).concat("_span")),
		sna : String(generateNextID(glycoRows[i-1].sna).concat("_span")),
		aal : String(generateNextID(glycoRows[i-1].aal).concat("_span")),
		uea : String(generateNextID(glycoRows[i-1].uea).concat("_span")),
		psa : String(generateNextID(glycoRows[i-1].psa).concat("_span")),
		maltwo : String(generateNextID(glycoRows[i-1].maltwo).concat("_span")),
		npl : String(generateNextID(glycoRows[i-1].npl).concat("_span")),
		notes : String(generateNextID(glycoRows[i-1].notes).concat("_id")),
		addRowBtn : String(generateNextID(glycoRows[i-1].addRowBtn).concat("_id")),
		delRowBtn : String(generateNextID(glycoRows[i-1].delRowBtn).concat("_id")),
		spaceBreak : String(generateNextID(glycoRows[i-1].spaceBreak).concat("_id"))
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
		
	//Check to see how many medications are available for the page
	var rowTotal = glycoRows.length;
	
	// hide the delete Button in the first row - it should never be seen
	$j("#" + glycoRows[0].delRowBtn).hide();
	
		// Start the for loop in the second row (array # 1) because the first row
	    // will always display.
		for ( var i = 1; i < rowTotal; i++) {
			
		// when the form loads, check to see if there is data populated in the
		// rows.
		var a = glycoRows[i].drawDate.indexOf("_span");
		var c = glycoRows[i].vwfag.indexOf("_span");
		
		//Check if the Type dropdown has an option selected OR
		//Check if the Brand Name has data in it
		//If either of these are True - assume that there are values for all columns and check the next row.
		if ($j("#" + glycoRows[i].drawDate.substring(0, a)).val() != "" ||
				$j("#" + glycoRows[i].vwfag.substring(0,c)).val() != "")
		{
			//Hide the add button in the previous row. 
			$j("#" + glycoRows[i-1].addRowBtn).hide();
			$j("#" + glycoRows[i-1].delRowBtn).hide();
			
			if(i == 10){
				$j("#" + glycoRows[i].addRowBtn).hide();
			}
			
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			$j("#" + glycoRows[i-1].addRowBtn).show();
			if((i-1) > 0){
				$j("#" + glycoRows[i-1].delRowBtn).show();
			}
			
			//Hide this row.
			$j("#" + glycoRows[i].drawDate).closest("tr").hide();
			$j("#" + glycoRows[i].visit).closest("tr").hide();
			$j("#" + glycoRows[i].vwfag).closest("tr").hide();
			$j("#" + glycoRows[i].rca).closest("tr").hide();
			$j("#" + glycoRows[i].eel).closest("tr").hide();
			$j("#" + glycoRows[i].eca).closest("tr").hide();
			$j("#" + glycoRows[i].malone).closest("tr").hide();
			$j("#" + glycoRows[i].phae).closest("tr").hide();
			$j("#" + glycoRows[i].phal).closest("tr").hide();
			$j("#" + glycoRows[i].ptl).closest("tr").hide();
			$j("#" + glycoRows[i].sba).closest("tr").hide();
			$j("#" + glycoRows[i].stl).closest("tr").hide();
			$j("#" + glycoRows[i].wga).closest("tr").hide();
			$j("#" + glycoRows[i].sna).closest("tr").hide();
			$j("#" + glycoRows[i].aal).closest("tr").hide();
			$j("#" + glycoRows[i].uea).closest("tr").hide();
			$j("#" + glycoRows[i].psa).closest("tr").hide();
			$j("#" + glycoRows[i].maltwo).closest("tr").hide();
			$j("#" + glycoRows[i].npl).closest("tr").hide();
			$j("#" + glycoRows[i].notes).closest("tr").hide();
			$j("#" + glycoRows[i].addRowBtn).closest("tr").hide();
			$j("#" + glycoRows[i].spaceBreak).closest("tr").hide();
			
		}
	}
	

//******* BEGIN ADD BUTTON LISTENER ***************//
$j(".addBtn").click(function() {
	var parentLabel = $j(this).parent("label");
	var labelId = $j(parentLabel).attr("id");
	
	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = glycoRows[i].addRowBtn;
		if (rowName === labelId) {
			x = "True";
			//Hide the delete and add buttons in this row
			if(i < glycoRows.length) {
				if(i != (glycoRows.length-1)) {
					$j("#" + glycoRows[i].delRowBtn).hide();
				}
				$j("#" + glycoRows[i].addRowBtn).hide();

			}
					
			//Show all values in row where the add button was selected
			$j("#" + glycoRows[i+1].drawDate).closest("tr").show();
			$j("#" + glycoRows[i+1].visit).closest("tr").show();
			$j("#" + glycoRows[i+1].vwfag).closest("tr").show();
			$j("#" + glycoRows[i+1].rca).closest("tr").show();
			$j("#" + glycoRows[i+1].eel).closest("tr").show();
			$j("#" + glycoRows[i+1].eca).closest("tr").show();
			$j("#" + glycoRows[i+1].malone).closest("tr").show();
			$j("#" + glycoRows[i+1].phae).closest("tr").show();
			$j("#" + glycoRows[i+1].phal).closest("tr").show();
			$j("#" + glycoRows[i+1].ptl).closest("tr").show();
			$j("#" + glycoRows[i+1].sba).closest("tr").show();
			$j("#" + glycoRows[i+1].stl).closest("tr").show();
			$j("#" + glycoRows[i+1].wga).closest("tr").show();
			$j("#" + glycoRows[i+1].sna).closest("tr").show();
			$j("#" + glycoRows[i+1].aal).closest("tr").show();
			$j("#" + glycoRows[i+1].uea).closest("tr").show();
			$j("#" + glycoRows[i+1].psa).closest("tr").show();
			$j("#" + glycoRows[i+1].maltwo).closest("tr").show();
			$j("#" + glycoRows[i+1].npl).closest("tr").show();
			$j("#" + glycoRows[i+1].notes).closest("tr").show();
			$j("#" + glycoRows[i+1].addRowBtn).closest("tr").show();
			$j("#" + glycoRows[i+1].spaceBreak).closest("tr").show();

			if((i+1) < (glycoRows.length -1)) {
				$j("#" + glycoRows[i+1].addRowBtn).show();
			}

			if((i+1) === (glycoRows.length -1)) {
				$j("#" + glycoRows[i+1].addRowBtn).hide();
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
		var rowName = glycoRows[i].delRowBtn;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			var a = glycoRows[i].drawDate.indexOf("_span");
			$j("#" + glycoRows[i].drawDate.substring(0, a)).val("");
			$j("#" + glycoRows[i].drawDate).hide();

			var b = glycoRows[i].visit.indexOf("_span");
			$j("#" + glycoRows[i].visit.substring(0, b)).val("Select an option");
			$j("#" + glycoRows[i].visit).hide();

			var d = glycoRows[i].vwfag.indexOf("_span");
			$j("#" + glycoRows[i].vwfag.substring(0, d)).val("");
			$j("#" + glycoRows[i].vwfag).hide();

			var e = glycoRows[i].rca.indexOf("_span");
			$j("#" + glycoRows[i].rca.substring(0, e)).val("");
			$j("#" + glycoRows[i].rca).hide();

			var f = glycoRows[i].eel.indexOf("_span");
			$j("#" + glycoRows[i].eel.substring(0, f)).val("");
			$j("#" + glycoRows[i].eel).hide();
			
			var g = glycoRows[i].eca.indexOf("_span");
			$j("#" + glycoRows[i].eca.substring(0, g)).val("");
			$j("#" + glycoRows[i].eca).hide();
			
			var h = glycoRows[i].malone.indexOf("_span");
			$j("#" + glycoRows[i].malone.substring(0, h)).val("");
			$j("#" + glycoRows[i].malone).hide();
			
			var j = glycoRows[i].phae.indexOf("_span");
			$j("#" + glycoRows[i].phae.substring(0, j)).val("");
			$j("#" + glycoRows[i].phae).hide();
			
			var k = glycoRows[i].phal.indexOf("_span");
			$j("#" + glycoRows[i].phal.substring(0, k)).val("");
			$j("#" + glycoRows[i].phal).hide();
			
			var l = glycoRows[i].ptl.indexOf("_span");
			$j("#" + glycoRows[i].ptl.substring(0, l)).val("");
			$j("#" + glycoRows[i].ptl).hide();
			
			var m = glycoRows[i].sba.indexOf("_span");
			$j("#" + glycoRows[i].sba.substring(0, m)).val("");
			$j("#" + glycoRows[i].sba).hide();
			
			var n = glycoRows[i].stl.indexOf("_span");
			$j("#" + glycoRows[i].stl.substring(0, n)).val("");
			$j("#" + glycoRows[i].stl).hide();
			
			var o = glycoRows[i].wga.indexOf("_span");
			$j("#" + glycoRows[i].wga.substring(0, o)).val("");
			$j("#" + glycoRows[i].wga).hide();
			
			var p = glycoRows[i].sna.indexOf("_span");
			$j("#" + glycoRows[i].sna.substring(0, p)).val("");
			$j("#" + glycoRows[i].sna).hide();
			
			var q = glycoRows[i].aal.indexOf("_span");
			$j("#" + glycoRows[i].aal.substring(0, q)).val("");
			$j("#" + glycoRows[i].aal).hide();
			
			var r = glycoRows[i].uea.indexOf("_span");
			$j("#" + glycoRows[i].uea.substring(0, r)).val("");
			$j("#" + glycoRows[i].uea).hide();
			
			var s = glycoRows[i].psa.indexOf("_span");
			$j("#" + glycoRows[i].psa.substring(0, s)).val("");
			$j("#" + glycoRows[i].psa).hide();
			
			var t = glycoRows[i].maltwo.indexOf("_span");
			$j("#" + glycoRows[i].maltwo.substring(0, t)).val("");
			$j("#" + glycoRows[i].maltwo).hide();
			
			var u = glycoRows[i].npl.indexOf("_span");
			$j("#" + glycoRows[i].npl.substring(0, u)).val("");
			$j("#" + glycoRows[i].npl).hide();
			
			var v = glycoRows[i].notes.indexOf("_span");
			$j("#" + glycoRows[i].notes.substring(0, v)).val("");
			$j("#" + glycoRows[i].notes).hide();

			$j("#" + glycoRows[i].drawDate).closest("tr").hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + glycoRows[i-1].addRowBtn).show();
			if((i-1) > 0) {
				$j("#" + glycoRows[i-1].delRowBtn).show();
			}
		}
			i++;
		
	}

});
	

});