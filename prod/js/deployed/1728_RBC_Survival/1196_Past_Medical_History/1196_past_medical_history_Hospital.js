var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var totalRowsHospital = 50;
var hospitalRows = new Array(totalRowsHospital);

hospitalRows[0] = {
	hospitalAdminDate : 'fld10050_136916_143122_span',
	hospitalDisDate : 'fld10050_137066_143272_span', 
	hospitalDiagnosis : 'fld10050_136866_143072_span',
	AddRowBtn3 : 'fld10050_136816_143022_id',
	DelRowBtn3 : 'fld10050_136966_143172_id'
}

for (var i = 1; i < totalRowsHospital; i++) {
	hospitalRows[i] = {
		hospitalAdminDate : String(generateNextID(hospitalRows[i-1].hospitalAdminDate).concat("_span")),
		hospitalDisDate : String(generateNextID(hospitalRows[i-1].hospitalDisDate).concat("_span")),
		hospitalDiagnosis : String(generateNextID(hospitalRows[i-1].hospitalDiagnosis).concat("_span")),
		AddRowBtn3 : String(generateNextID(hospitalRows[i-1].AddRowBtn3).concat("_id")),
		DelRowBtn3 : String(generateNextID(hospitalRows[i-1].DelRowBtn3).concat("_id"))
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
	
		//$j("#" + hospitalRows[0].hospitalDate.substring(0, 20)).val("123456");
	
		//hide the comments label- never want to see it
		$j('td:contains("Comments")').hide();
		$j('td:contains("Space Break")').hide();
	
		//Check to see how many medications are available for the page
		var rowTotalHospital = hospitalRows.length;
	
		// hide the delete Button in the first row - it should never be seen
		$j("#" + hospitalRows[0].DelRowBtn3).hide();


	    // Start the for loop in the second row (array # 1) because the first row
	    // will always display.
		for ( var i = 1; i < rowTotalHospital; i++) {
			
		// when the form loads, check to see if there is data populated in the
		// rows.
		var a = hospitalRows[i].hospitalAdminDate.indexOf("_span");
		var b = hospitalRows[i].hospitalDiagnosis.indexOf("_span");
		
		//Check if the addtlOrgs dropdown has an option selected OR
		//Check if the Brand Name has data in it
		//If either of these are True - assume that there are values for all columns and check the next row.
		if ($j("#" + hospitalRows[i].hospitalAdminDate.substring(0, a)).val() != "" ||
				$j("#" + hospitalRows[i].hospitalDiagnosis.substring(0,b)).val() != "")
		{
			//Hide the add button in the previous row. 
			$j("#" + hospitalRows[i-1].AddRowBtn3).hide();
			$j("#" + hospitalRows[i-1].DelRowBtn3).hide();
			
			if(i == 49){
				$j("#" + hospitalRows[i].AddRowBtn3).hide();
			}
			
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			$j("#" + hospitalRows[i-1].AddRowBtn3).show();
			if((i-1) > 0){
				$j("#" + hospitalRows[i-1].DelRowBtn3).show();
			}
			
			//Hide this row.
			$j("#" + hospitalRows[i].hospitalAdminDate).closest("tr").hide();
			
		}
	}

	
$j(".addBtn3").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = hospitalRows[i].AddRowBtn3;
		if (rowName === labelId) {
			x = "True";
			//Hide the delete and add buttons in this row
			if(i < hospitalRows.length) {
				if(i != (hospitalRows.length-1)) {
					$j("#" + hospitalRows[i].DelRowBtn3).hide();
				}
				$j("#" + hospitalRows[i].AddRowBtn3).hide();

			}
					
			//Show all values in row where the add button was selected
			$j("#" + hospitalRows[i+1].hospitalAdminDate).closest("tr").show();
			$j("#" + hospitalRows[i+1].hospitalAdminDate).show();
			$j("#" + hospitalRows[i+1].hospitalAdminDate).siblings().show();
			$j("#" + hospitalRows[i+1].hospitalDisDate).show();
			$j("#" + hospitalRows[i+1].hospitalDiagnosis).show();
			
		} 
			i++;
		
		if((i+1) === (hospitalRows.length -1)) {
                        $j("#" + hospitalRows[i+1].AddRowBtn3).hide();
                  }
	}

});



$j(".deleteBtn3").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var y;
	var i = 0;

	while (!Boolean(y)) {
		var rowName = hospitalRows[i].DelRowBtn3;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			var a = hospitalRows[i].hospitalAdminDate.indexOf("_span");
			$j("#" + hospitalRows[i].hospitalAdminDate.substring(0, a)).val("");
			$j("#" + hospitalRows[i].hospitalAdminDate).hide();
			$j("#" + hospitalRows[i].hospitalAdminDate).siblings().hide();

			var b = hospitalRows[i].hospitalDisDate.indexOf("_span");
			$j("#" + hospitalRows[i].hospitalDisDate.substring(0, b)).val("");
			$j("#" + hospitalRows[i].hospitalDisDate).hide();
			
			var c = hospitalRows[i].hospitalDiagnosis.indexOf("_span");
			$j("#" + hospitalRows[i].hospitalDiagnosis.substring(0, c)).val("");
			$j("#" + hospitalRows[i].hospitalDiagnosis).hide();

			$j("#" + hospitalRows[i].hospitalAdminDate).closest("tr").hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + hospitalRows[i-1].AddRowBtn3).show();
			if((i-1) > 0) {
				$j("#" + hospitalRows[i-1].DelRowBtn3).show();
			}
		}
			i++;
	
	}

});

});