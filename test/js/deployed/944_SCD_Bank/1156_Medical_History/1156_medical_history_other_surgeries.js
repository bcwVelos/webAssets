var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var totalOtherRows = 20;
var otherotherSurgeryRows = new Array(totalOtherRows);
var otherSurgery = "fld10050_131879_136832";

otherSurgeryRows[0] = {
	specifyName : 'fld10050_131890_136843_span',
	surgeryDate: 'fld10050_131880_136833_span',
	addRowBtn : 'fld10050_131910_136863_id',
	delRowBtn : 'fld10050_131920_136873_id'
}

for (var i = 1; i < totalOtherRows; i++) {
	otherSurgeryRows[i] = {
		specifyName : String(generateNextID(otherSurgeryRows[i-1].specifyName).concat("_span")),
		surgeryDate : String(generateNextID(otherSurgeryRows[i-1].surgeryDate).concat("_span")),
		addRowBtn : String(generateNextID(otherSurgeryRows[i-1].addRowBtn).concat("_id")),
		delRowBtn : String(generateNextID(otherSurgeryRows[i-1].delRowBtn).concat("_id"))
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
	
		//$j("#" + otherSurgeryRows[0].jointSurgeryName.substring(0, 20)).val("12345 6");
	
		//hide the comments label- never want to see it
		$j('td:contains("Comments")').hide();
		var otherSurgeryYes = document.getElementsByName(otherSurgery)[0];
		var otherSurgeryNo = document.getElementsByName(otherSurgery)[1];
		
 		otherSurgeryYes.addEventListener('click', function() {
			$j("#" + otherSurgeryRows[0].addRowBtn).show();
		}, false);
		
 		// Add an event listener to hide the comment if No is clicked
		otherSurgeryNo.addEventListener('click', function() {
			$j("#" + otherSurgeryRows[0].addRowBtn).hide();
		}, false);
		
		otherSurgeryYes.addEventListener('dblclick', function() {
			$j("#" + otherSurgeryRows[0].addRowBtn).hide();
		}, false);
	
		//Check to see how many medications are available for the page
		var rowTotal = otherSurgeryRows.length;
	
		// hide the delete Button in the first row - it should never be seen
		$j("#" + otherSurgeryRows[0].delRowBtn).hide();

	    // Start the for loop in the second row (array # 1) because the first row
	    // will always display.
		for ( var i = 1; i < rowTotal; i++) {
			
		// when the form loads, check to see if there is data populated in the
		// rows.
		var a = otherSurgeryRows[i].specifyName.indexOf("_span");
		
		//Check if the addtlOrgs dropdown has an option selected OR
		//Check if the Brand Name has data in it
		//If either of these are True - assume that there are values for all columns and check the next row.
		if ($j("#" + otherSurgeryRows[i].specifyName.substring(0, a)).val() != "")
		{
			//Hide the add button in the previous row. 
			$j("#" + otherSurgeryRows[i-1].addRowBtn).hide();
			$j("#" + otherSurgeryRows[i-1].delRowBtn).hide();
			
			if(i == 9){
				$j("#" + otherSurgeryRows[i].addRowBtn).hide();
			}
			
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			if (!otherSurgeryYes.checked)
				$j("#" + otherSurgeryRows[0].addRowBtn).hide();
			else
				$j("#" + otherSurgeryRows[i-1].addRowBtn).show();
			
			if((i-1) > 0){
				$j("#" + otherSurgeryRows[i-1].delRowBtn).show();
			}
			
			//Hide this row.
			$j("#" + otherSurgeryRows[i].specifyName).closest("tr").hide();
			
		}
	}

	
$j(".addBtn2").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = otherSurgeryRows[i].addRowBtn;
		if (rowName === labelId) {
			x = "True";
			//Hide the delete and add buttons in this row
			if(i < otherSurgeryRows.length) {
				if(i != (otherSurgeryRows.length-1)) {
					$j("#" + otherSurgeryRows[i].delRowBtn).hide();
				}
				$j("#" + otherSurgeryRows[i].addRowBtn).hide();

			}
					
			//Show all values in row where the add button was selected
			$j("#" + otherSurgeryRows[i+1].specifyName).closest("tr").show();
			$j("#" + otherSurgeryRows[i+1].specifyName).show();
			$j("#" + otherSurgeryRows[i+1].surgeryDate).show();
			
		} 
			i++;
		
		if((i+1) === (otherSurgeryRows.length -1)) {
                        $j("#" + otherSurgeryRows[i+1].addRowBtn).hide();
                  }
	}

});



$j(".deleteBtn2").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var y;
	var i = 0;

	while (!Boolean(y)) {
		var rowName = otherSurgeryRows[i].delRowBtn;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			var b = otherSurgeryRows[i].specifyName.indexOf("_span");
			$j("#" + otherSurgeryRows[i].specifyName.substring(0, b)).val("");
			$j("#" + otherSurgeryRows[i].specifyName).hide();
			
			var c = otherSurgeryRows[i].surgeryDate.indexOf("_span");
			$j("#" + otherSurgeryRows[i].surgeryDate.substring(0, c)).val("");
			$j("#" + otherSurgeryRows[i].surgeryDate).hide();

			$j("#" + otherSurgeryRows[i].specifyName).closest("tr").hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + otherSurgeryRows[i-1].addRowBtn).show();
			if((i-1) > 0) {
				$j("#" + otherSurgeryRows[i-1].delRowBtn).show();
			}
		}
			i++;
	
	}

});

});



