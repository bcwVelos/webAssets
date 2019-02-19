var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var totalRows = 20;
var assaysRows = new Array(totalRows);

assaysRows[0] = {
	assayDate : 'fld10050_136226_141261_span',
	sample : 'fld10050_136246_141281_span',
	studyPhase : 'fld10050_136186_141221_span',
	rvwfHumateP : 'fld10050_136206_141241_span',
	iggOD : 'fld10050_136286_141321_span',
	igg95 : 'fld10050_136326_141361_span',
	igmOD : 'fld10050_136366_141401_span',
	igm95 : 'fld10050_136346_141381_span',
	addRowBtnA : 'fld10050_136306_141341_id',
	delRowBtnA : 'fld10050_136386_141421_id'
}

for (var i = 1; i < totalRows; i++) {
	assaysRows[i] = {
		assayDate : String(generateNextID(assaysRows[i-1].assayDate).concat("_span")),
		sample : String(generateNextID(assaysRows[i-1].sample).concat("_span")),
		studyPhase : String(generateNextID(assaysRows[i-1].studyPhase).concat("_span")),
		rvwfHumateP : String(generateNextID(assaysRows[i-1].rvwfHumateP).concat("_span")),
		iggOD : String(generateNextID(assaysRows[i-1].iggOD).concat("_span")),
		igg95 : String(generateNextID(assaysRows[i-1].igg95).concat("_span")),
		igmOD : String(generateNextID(assaysRows[i-1].igmOD).concat("_span")),
		igm95 : String(generateNextID(assaysRows[i-1].igm95).concat("_span")),
		addRowBtnA : String(generateNextID(assaysRows[i-1].addRowBtnAA).concat("_id")),
		delRowBtnA : String(generateNextID(assaysRows[i-1].delRowBtnAA).concat("_id"))
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
		var rowTotal = assaysRows.length;
	
		// hide the delete Button in the first row - it should never be seen
		$j("#" + assaysRows[0].delRowBtnAA).hide();

	    // Start the for loop in the second row (array # 1) because the first row
	    // will always display.
		for ( var i = 1; i < rowTotal; i++) {
			
		// when the form loads, check to see if there is data populated in the
		// rows.
		var a = assaysRows[i].assayDate.indexOf("_span");
		var b = assaysRows[i].sample.indexOf("_span");
		
		//Check if the addtlOrgs dropdown has an option selected OR
		//Check if the Brand Name has data in it
		//If either of these are True - assume that there are values for all columns and check the next row.
		if ($j("#" + assaysRows[i].assayDate.substring(0, a)).val() != "")
		{
			//Hide the add button in the previous row. 
			$j("#" + assaysRows[i-1].addRowBtnA).hide();
			$j("#" + assaysRows[i-1].delRowBtnA).hide();
			
			if(i == totalRows){
				$j("#" + assaysRows[i].addRowBtnA).hide();
			}
			
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			$j("#" + assaysRows[i-1].addRowBtnA).show();
			if((i-1) > 0){
				$j("#" + assaysRows[i-1].delRowBtnA).show();
			}
			
			//Hide this row.
			$j("#" + assaysRows[i].assayDate).closest("tr").hide();
			
		}
	}

	
$j(".addBtnSA").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = assaysRows[i].addRowBtnA;
		if (rowName === labelId) {
			x = "True";
			//Hide the delete and add buttons in this row
			if(i < assaysRows.length) {
				if(i != (assaysRows.length-1)) {
					$j("#" + assaysRows[i].delRowBtnA).hide();
				}
				$j("#" + assaysRows[i].addRowBtnA).hide();

			}
					
			//Show all values in row where the add button was selected
			$j("#" + assaysRows[i+1].assayDate).closest("tr").show();
			$j("#" + assaysRows[i+1].assayDate).show();
			$j("#" + assaysRows[i+1].assayDate).siblings().show();
			$j("#" + assaysRows[i+1].sample).show();
			$j("#" + assaysRows[i+1].studyPhase).show();
			$j("#" + assaysRows[i+1].rvwfHumateP).show();
			$j("#" + assaysRows[i+1].iggOD).show();
			$j("#" + assaysRows[i+1].igg95).show();
			$j("#" + assaysRows[i+1].igmOD).show();
			$j("#" + assaysRows[i+1].igm95).show();
		} 
			i++;
		
		if((i+1) === (assaysRows.length -1)) {
                        $j("#" + assaysRows[i+1].addRowBtnA).hide();
                  }
	}

});



$j(".deleteBtnSA").click(function() {
	var parentLabelElement = $j(this).parent("label");
    var labelId = $j(parentLabelElement).attr("id");
	var y;
	var i = 0;

	while (!Boolean(y)) {
		var rowName = assaysRows[i].delRowBtnA;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			var a = assaysRows[i].assayDate.indexOf("_span");
			$j("#" + assaysRows[i].assayDate.substring(0, a)).val("");
			$j("#" + assaysRows[i].assayDate).hide();
			$j("#" + assaysRows[i].assayDate).siblings().hide();
			
			var b = assaysRows[i].sample.indexOf("_span");
			$j("#" + assaysRows[i].sample.substring(0, b)).val("");
			$j("#" + assaysRows[i].sample).hide();
			
			var c = assaysRows[i].rvwfHumateP.indexOf("_span");
			var listUncheck = document.getElementsByName(assaysRows[i].rvwfHumateP.substring(0, c));
			for (var j = 0 ; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + assaysRows[i].rvwfHumateP).hide();
			
			var d = assaysRows[i].studyPhase.indexOf("_span");
			var listUncheck = document.getElementsByName(assaysRows[i].studyPhase.substring(0, d));
			for (var j = 0 ; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + assaysRows[i].studyPhase).hide();
			
			var e = assaysRows[i].iggOD.indexOf("_span");
			$j("#" + assaysRows[i].iggOD.substring(0, e)).val("");
			$j("#" + assaysRows[i].iggOD).hide();
			
			var f = assaysRows[i].igg95.indexOf("_span");
			$j("#" + assaysRows[i].igg95.substring(0, f)).val("");
			$j("#" + assaysRows[i].igg95).hide();
			
			var g = assaysRows[i].igmOD.indexOf("_span");
			$j("#" + assaysRows[i].igmOD.substring(0, g)).val("");
			$j("#" + assaysRows[i].igmOD).hide();
			
			var h = assaysRows[i].igm95.indexOf("_span");
			$j("#" + assaysRows[i].igm95.substring(0, h)).val("");
			$j("#" + assaysRows[i].igm95).hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + assaysRows[i-1].addRowBtnA).show();
			if((i-1) > 0) {
				$j("#" + assaysRows[i-1].delRowBtnA).show();
			}
		}
			i++;
	}

});

	var a;
	var fieldID;
	
	for (var i = 0; i < totalRows; i++) {
		a = assaysRows[i].uniqueInfusion.indexOf("_span");
		fieldID = assaysRows[i].uniqueInfusion.substring(0, a);
		var uniqueInfusionBox = document.getElementsByName(fieldID)[0];
		if (!uniqueInfusionBox.checked) {
			$j("#" + assaysRows[i].infusionType).hide();
			$j("#" + assaysRows[i].infusionLocation).hide();
			$j("#" + assaysRows[i].bleedSite).hide();
			$j("#" + assaysRows[i].bleedSite).siblings().hide();
			$j("#" + assaysRows[i].infusionProduct).hide();
			$j("#" + assaysRows[i].infusionProduct).siblings().hide();
		}

		$j(uniqueInfusionBox).click(showUniqueInfusion(i, uniqueInfusionBox)); {}
	}
	
	function showUniqueInfusion(j, x) {
		return function(event) {
			if (x.checked) {
				$j("#" + assaysRows[j].infusionType).show();
				$j("#" + assaysRows[j].infusionLocation).show();
				$j("#" + assaysRows[j].bleedSite).show();
				$j("#" + assaysRows[j].bleedSite).siblings().show();
				$j("#" + assaysRows[j].infusionProduct).show();
				$j("#" + assaysRows[j].infusionProduct).siblings().show();
			} else {				
				$j("#" + assaysRows[j].infusionType).hide();
				$j("#" + assaysRows[j].infusionLocation).hide();
				$j("#" + assaysRows[j].bleedSite).hide();
				$j("#" + assaysRows[j].bleedSite).siblings().hide();
				$j("#" + assaysRows[j].infusionProduct).hide();
				$j("#" + assaysRows[j].infusionProduct).siblings().hide();
			}
		};
	}

});



