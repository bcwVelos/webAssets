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
	delRowBtn : 'fld10050_143747_148924_id'
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
		delRowBtn : String(generateNextID(glycoRows[i-1].delRowBtn).concat("_id"))
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
		var b = glycoRows[i].visit.indexOf("_span");
		var c = glycoRows[i].vwfag.indexOf("_span");
		
		//Check if the Type dropdown has an option selected OR
		//Check if the Brand Name has data in it
		//If either of these are True - assume that there are values for all columns and check the next row.
		if ($j("#" + glycoRows[i].drawDate.substring(0, a)).val() != "" ||
				$j("#" + glycoRows[i].visit.substring(0,b)).val() != "Select an Option" ||
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
			
		}
	}


});