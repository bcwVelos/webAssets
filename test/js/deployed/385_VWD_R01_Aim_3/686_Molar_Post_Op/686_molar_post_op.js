var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var totalRows = 10;
var day0Rows = new Array(totalRows);

day0Rows[0] = {
	medType : 'fld10050_139438_144473_span',
	brandName : 'fld10050_139468_144503_span',
	genericName : 'fld10050_139488_144523_span',
	medicationType : 'fld10050_139478_144513_span',
	pharmClass : 'fld10050_139498_144533_span',
	addRowBtn : 'fld10050_139448_144483_id',
	delRowBtn : 'fld10050_139458_144493_id',
	copyBtn : 'fld10050_139508_144543_id',
	pasteBtn : 'fld10050_139518_144553_id'
}

for (var i = 1; i < totalRows; i++) {
	day0Rows[i] = {
		medType : String(generateNextID(day0Rows[i-1].medType).concat("_span")),
		brandName : String(generateNextID(day0Rows[i-1].brandName).concat("_span")),
		genericName : String(generateNextID(day0Rows[i-1].genericName).concat("_span")),
		medicationType : String(generateNextID(day0Rows[i-1].medicationType).concat("_span")),
		pharmClass : String(generateNextID(day0Rows[i-1].pharmClass).concat("_span")),
		addRowBtn : String(generateNextID(day0Rows[i-1].addRowBtn).concat("_id")),
		delRowBtn : String(generateNextID(day0Rows[i-1].delRowBtn).concat("_id")),
		copyBtn : String(generateNextID(day0Rows[i-1].copyBtn).concat("_id")),
		pasteBtn : String(generateNextID(day0Rows[i-1].pasteBtn).concat("_id"))
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
		var rowTotal = day0Rows.length;
	
		// hide the delete Button in the first row - it should never be seen
		$j("#" + day0Rows[0].delRowBtn).hide();

	    // Start the for loop in the second row (array # 1) because the first row
	    // will always display.
		for ( var i = 1; i < rowTotal; i++) {
			
		// when the form loads, check to see if there is data populated in the
		// rows.
		var a = day0Rows[i].medType.indexOf("_span");
		var b = day0Rows[i].brandName.indexOf("_span");
		
		//Check if the addtlOrgs dropdown has an option selected OR
		//Check if the Brand Name has data in it
		//If either of these are True - assume that there are values for all columns and check the next row.
		if ($j("#" + day0Rows[i].medType.substring(0, a)).val() != "")
		{
			//Hide the add button in the previous row. 
			$j("#" + day0Rows[i-1].addRowBtn).hide();
			$j("#" + day0Rows[i-1].delRowBtn).hide();
			
			if(i == totalRows){
				$j("#" + day0Rows[i].addRowBtn).hide();
			}
			
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			$j("#" + day0Rows[i-1].addRowBtn).show();
			if((i-1) > 0){
				$j("#" + day0Rows[i-1].delRowBtn).show();
			}
			
			//Hide this row.
			$j("#" + day0Rows[i].medType).closest("tr").hide();
			
		}
	}

	
$j(".addBtn0").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = day0Rows[i].addRowBtn;
		if (rowName === labelId) {
			x = "True";
			//Hide the delete and add buttons in this row
			if(i < day0Rows.length) {
				if(i != (day0Rows.length-1)) {
					$j("#" + day0Rows[i].delRowBtn).hide();
				}
				$j("#" + day0Rows[i].addRowBtn).hide();

			}

			//Show all values in row where the add button was selected
			$j("#" + day0Rows[i+1].medType).closest("tr").show();
			$j("#" + day0Rows[i+1].medType).show();
			$j("#" + day0Rows[i+1].medType).siblings().show();
			$j("#" + day0Rows[i+1].brandName).show();
			$j("#" + day0Rows[i+1].genericName).show();
			$j("#" + day0Rows[i+1].medicationType).show();
			$j("#" + day0Rows[i+1].pharmClass).show();
			$j("#" + day0Rows[i+1].copyBtn).show();
			$j("#" + day0Rows[i+1].pasteBtn).show();
		} 
			i++;
		
		if((i+1) === (day0Rows.length -1)) {
                        $j("#" + day0Rows[i+1].addRowBtn).hide();
                  }
	}

});



$j(".deleteBtn0").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var y;
	var i = 0;

	while (!Boolean(y)) {
		var rowName = day0Rows[i].delRowBtn;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			var a = day0Rows[i].medType.indexOf("_span");
			$j("#" + day0Rows[i].medType.substring(0, a)).val("");
			$j("#" + day0Rows[i].medType).hide();
			$j("#" + day0Rows[i].medType).siblings().hide();
			
			var b = day0Rows[i].brandName.indexOf("_span");
			$j("#" + day0Rows[i].brandName.substring(0, b)).val("");
			$j("#" + day0Rows[i].brandName).hide();
			
			var c = day0Rows[i].genericName.indexOf("_span");
			$j("#" + day0Rows[i].genericName.substring(0, c)).val("");
			$j("#" + day0Rows[i].genericName).hide();
			
			var d = day0Rows[i].medicationType.indexOf("_span");
			$j("#" + day0Rows[i].medicationType.substring(0, d)).val("");
			$j("#" + day0Rows[i].medicationType).hide();
			
			var e = day0Rows[i].pharmClass.indexOf("_span");
			$j("#" + day0Rows[i].pharmClass.substring(0, e)).val("");
			$j("#" + day0Rows[i].pharmClass).hide();
			
			$j("#" + day0Rows[i].medType).closest("tr").hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + day0Rows[i-1].addRowBtn).show();
			if((i-1) > 0) {
				$j("#" + day0Rows[i-1].delRowBtn).show();
			}
		}
			i++;
	}

});

});



