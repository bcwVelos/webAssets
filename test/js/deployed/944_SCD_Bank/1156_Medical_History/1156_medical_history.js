var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var totalRows = 10;
var surgeryRows = new Array(totalRows);
var jointReplacement = "fld10050_131879_136832";

surgeryRows[0] = {
	jointSurgeryName : 'fld10050_131900_136853_span',  
	ifOther : 'fld10050_131890_136843_span',
	jointSurgeryDate: 'fld10050_131880_136833_span',
	addRowBtn : 'fld10050_131910_136863_id',
	delRowBtn : 'fld10050_131920_136873_id'
}

for (var i = 1; i < totalRows; i++) {
	surgeryRows[i] = {
		jointSurgeryName : String(generateNextID(surgeryRows[i-1].jointSurgeryName).concat("_span")),
		ifOther : String(generateNextID(surgeryRows[i-1].ifOther).concat("_span")),
		jointSurgeryDate : String(generateNextID(surgeryRows[i-1].jointSurgeryDate).concat("_span")),
		addRowBtn : String(generateNextID(surgeryRows[i-1].addRowBtn).concat("_id")),
		delRowBtn : String(generateNextID(surgeryRows[i-1].delRowBtn).concat("_id"))
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
	
		//$j("#" + surgeryRows[0].jointSurgeryName.substring(0, 20)).val("123456");
	
		//hide the comments label- never want to see it
		$j('td:contains("Comments")').hide();
		var jointReplacementYes = document.getElementsByName(jointReplacement)[0];
		var jointReplacementNo = document.getElementsByName(jointReplacement)[1];
		
		if (!jointReplacementYes.checked) {
			$j("#" + surgeryRows.addRowBtn).hide();
		}
	
		//Check to see how many medications are available for the page
		var rowTotal = surgeryRows.length;
	
		// hide the delete Button in the first row - it should never be seen
		$j("#" + surgeryRows[0].delRowBtn).hide();

	    // Start the for loop in the second row (array # 1) because the first row
	    // will always display.
		for ( var i = 1; i < rowTotal; i++) {
			
		// when the form loads, check to see if there is data populated in the
		// rows.
		var a = surgeryRows[i].jointSurgeryName.indexOf("_span");
		var b = surgeryRows[i].ifOther.indexOf("_span");		
		var b = surgeryRows[i].jointSurgeryDate.indexOf("_span");
		
		//Check if the addtlOrgs dropdown has an option selected OR
		//Check if the Brand Name has data in it
		//If either of these are True - assume that there are values for all columns and check the next row.
		if ($j("#" + surgeryRows[i].jointSurgeryName.substring(0, a)).val() != "")
		{
			//Hide the add button in the previous row. 
			$j("#" + surgeryRows[i-1].addRowBtn).hide();
			$j("#" + surgeryRows[i-1].delRowBtn).hide();
			
			if(i == 9){
				$j("#" + surgeryRows[i].addRowBtn).hide();
			}
			
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			$j("#" + surgeryRows[i-1].addRowBtn).show();
			if((i-1) > 0){
				$j("#" + surgeryRows[i-1].delRowBtn).show();
			}
			
			//Hide this row.
			$j("#" + surgeryRows[i].jointSurgeryName).closest("tr").hide();
			
		}
	}

	
$j(".addBtn").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = surgeryRows[i].addRowBtn;
		if (rowName === labelId) {
			x = "True";
			//Hide the delete and add buttons in this row
			if(i < surgeryRows.length) {
				if(i != (surgeryRows.length-1)) {
					$j("#" + surgeryRows[i].delRowBtn).hide();
				}
				$j("#" + surgeryRows[i].addRowBtn).hide();

			}
					
			//Show all values in row where the add button was selected
			$j("#" + surgeryRows[i+1].jointSurgeryName).closest("tr").show();
			$j("#" + surgeryRows[i+1].jointSurgeryName).show();
			$j("#" + surgeryRows[i+1].jointSurgeryName).siblings().show();
			$j("#" + surgeryRows[i+1].ifOther).show();
			$j("#" + surgeryRows[i+1].jointSurgeryDate).show();
			
		} 
			i++;
		
		if((i+1) === (surgeryRows.length -1)) {
                        $j("#" + surgeryRows[i+1].addRowBtn).hide();
                  }
	}

});



$j(".deleteBtn").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var y;
	var i = 0;

	while (!Boolean(y)) {
		var rowName = surgeryRows[i].delRowBtn;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			var a = surgeryRows[i].jointSurgeryName.indexOf("_span");
			$j("#" + surgeryRows[i].jointSurgeryName.substring(0, a)).val("");
			$j("#" + surgeryRows[i].jointSurgeryName).hide();
			$j("#" + surgeryRows[i].jointSurgeryName).siblings().hide();

			var b = surgeryRows[i].ifOther.indexOf("_span");
			$j("#" + surgeryRows[i].ifOther.substring(0, b)).val("");
			$j("#" + surgeryRows[i].ifOther).hide();
			
			var c = surgeryRows[i].jointSurgeryDate.indexOf("_span");
			$j("#" + surgeryRows[i].jointSurgeryDate.substring(0, c)).val("");
			$j("#" + surgeryRows[i].jointSurgeryDate).hide();

			$j("#" + surgeryRows[i].jointSurgeryName).closest("tr").hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + surgeryRows[i-1].addRowBtn).show();
			if((i-1) > 0) {
				$j("#" + surgeryRows[i-1].delRowBtn).show();
			}
		}
			i++;
	
	}

});

});



