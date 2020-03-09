//********* BEGIN DATA OBJECT FUNCTIONS **********//

//Define Object that will hold the the ids to represent each section of a repeating row
//Create 2 constructor methods - one is empty, the other takes in all the values as parameters.
function medicationRow(){
    this.sampleID = null;
    this.timeInHours = null;
    this.fviii = null;
    this.vwfag = null;
    this.vwfrco = null;
    this.vwfgp1bm = null;
    this.vwfpp = null;
    this.vwfcb = null;
    this.vwfMult = null;
    this.addRowBtn = null;
    this.delRowBtn = null;

}

function medicationRow(sampleID, timeInHours, fviii, vwfag, vwfrco, vwfgp1bm, vwfpp, vwfcb, vwfMult, addRowBtn, delRowBtn) {
    this.sampleID = sampleID;
    this.timeInHours = timeInHours;
    this.fviii = fviii;
    this.vwfag = vwfag;
    this.vwfrco = vwfrco;
    this.vwfrco = vwfgp1bm;
    this.vwfpp = vwfpp;
    this.vwfrco = vwfcb;
    this.vwfMult = vwfMult;
    this.addRowBtn = addRowBtn;
    this.delRowBtn = delRowBtn;
}

//********* END DATA OBJECT FUNCTIONS **********//

//******* BEGIN HELPER FUNCTIONS ***************//
function parseFormReference(formRef) {
	var valNew = formRef.split("_");
	var nextValue = "";
    for(var i=0;i<valNew.length;i++){
    	if (i==0) {
    		nextValue = valNew[i] + "_";
    	} else if((i == 1) || (i == 2)) {
    	
	    	var numId = valNew[i];
	    	numId = Number(numId) + 1;
	    	nextValue = nextValue + "" + numId + "_";
    	} else {
    		nextValue = nextValue + valNew[i];
    	}
    }
    return nextValue;

}

function buildDataRows(totalRows, rowArray, rowObjectName) {
	for (i = 1; i < totalRows; i++) { 
		rowArray[i] =  new window[rowObjectName]();
		for (var name in rowArray[i-1]) {
			rowArray[i][name] = parseFormReference(rowArray[i-1][name]);
		}
	}
}
//******* END HELPER FUNCTIONS ***************//

//******* BEGIN DATA DEFINITIONS ***************//
//Define the name of the object that will be used to hold the row's data
var rowObjName = "medicationRow";

//Number of rows
var rowNum= 10;

//Post Op Day 0
//array to contain objects representing each row
var medicationRows = [];
//Define identifiers for the first row in the repeating data set.
medicationRows[0] = new medicationRow(
	"fld10050_32469_35679_span",
	"fld10050_32479_35689_span",
	"fld10050_32509_35719_span",
	"fld10050_32519_35729_span",
	"fld10050_32499_35709_span",
	"fld10050_133124_138119_span",
	"fld10050_32489_35699_span",
	"fld10050_143159_148313_span",
	"fld10050_32529_35739_span",
	"fld10050_32539_35749_id",
	"fld10050_32549_35759_id");


$j(document).ready(function() {
		//hide the comments label- never want to see it
		$j('td:contains("Comments")').hide();
		
		//First - build out the rows that will be referenced.
		buildDataRows(rowNum, medicationRows, rowObjName);
		
		//Check to see how many medications are available for the page
		var rowTotal = medicationRows.length;
	
		// hide the delete Button in the first row - it should never be seen
		$j("#" + medicationRows[0].delRowBtn).hide();
		

	    // Start the for loop in the second row (array # 1) because the first row
	    // will always display.
		for ( var i = 1; i < rowTotal; i++) {
			
		// when the form loads, check to see if there is data populated in the
		// rows.
		var a = medicationRows[i].fviii.indexOf("_span");
		var b = medicationRows[i].vwfag.indexOf("_span");
		var c = medicationRows[i].vwfrco.indexOf("_span");
		var f = medicationRows[i].vwfgp1bm.indexOf("_span");
		var d = medicationRows[i].vwfpp.indexOf("_span");
		var g = medicationRows[i].vwfcb.indexOf("_span");
		var e = medicationRows[i].vwfMult.indexOf("_span");		
		
		//Check if the Type dropdown has an option selected OR
		//Check if the Brand Name has data in it
		//If either of these are True - assume that there are values for all columns and check the next row.
		if ($j("#" + medicationRows[i].fviii.substring(0, a)).val() != "" ||
				$j("#" + medicationRows[i].vwfag.substring(0,b)).val() != "" ||
				$j("#" + medicationRows[i].vwfrco.substring(0,c)).val() != "" ||
				$j("#" + medicationRows[i].vwfpp.substring(0,d)).val() != "" ||
				$j("#" + medicationRows[i].vwfMult.substring(0,e)).val() != ""
				$j("#" + medicationRows[i].vwfgp1bm.substring(0,f)).val() != "" ||
				$j("#" + medicationRows[i].vwfcb.substring(0,g)).val() != "" ||)
		{
			//Hide the add button in the previous row. 
			$j("#" + medicationRows[i-1].addRowBtn).hide();
			$j("#" + medicationRows[i-1].delRowBtn).hide();
			
			if(i == 9){
				$j("#" + medicationRows[i].addRowBtn).hide();
			}
			
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			$j("#" + medicationRows[i-1].addRowBtn).show();
			if((i-1) > 0){
				$j("#" + medicationRows[i-1].delRowBtn).show();
			}
			
			//Hide this row.
			$j("#" + medicationRows[i].sampleID).closest("tr").hide();
			
		}
	}
	
//******* BEGIN ADD BUTTON LISTENER ***************//
$j(".addBtn").click(function() {
	var parentLabel = $j(this).parent("label");
	var labelId = $j(parentLabel).attr("id");
	
	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = medicationRows[i].addRowBtn;
		if (rowName === labelId) {
			x = "True";
			//Hide the delete and add buttons in this row
			if(i < medicationRows.length) {
				if(i != (medicationRows.length-1)) {
					$j("#" + medicationRows[i].delRowBtn).hide();
				}
				$j("#" + medicationRows[i].addRowBtn).hide();

			}
					
			//Show all values in row where the add button was selected
			$j("#" + medicationRows[i+1].sampleID).closest("tr").show();
			$j("#" + medicationRows[i+1].sampleID).show();
			$j("#" + medicationRows[i+1].timeInHours).show();
			$j("#" + medicationRows[i+1].fviii).show();
			$j("#" + medicationRows[i+1].vwfag).show();
			$j("#" + medicationRows[i+1].vwfrco).show();
			$j("#" + medicationRows[i+1].vwfgp1bm).show();
			$j("#" + medicationRows[i+1].vwfpp).show();
			$j("#" + medicationRows[i+1].vwfcb).show();
			$j("#" + medicationRows[i+1].vwfMult).show();

			if((i+1) < (medicationRows.length -1)) {
				$j("#" + medicationRows[i+1].addRowBtn).show();
			}

			if((i+1) === (medicationRows.length -1)) {
				$j("#" + medicationRows[i+1].addRowBtn).hide();
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
		var rowName = medicationRows[i].delRowBtn;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			var a = medicationRows[i].sampleID.indexOf("_span");
			$j("#" + medicationRows[i].sampleID.substring(0, a)).val("");
			$j("#" + medicationRows[i].sampleID).hide();
			//$j("#" + medicationRows[i].sampleID).siblings().hide();

			var b = medicationRows[i].timeInHours.indexOf("_span");
			$j("#" + medicationRows[i].timeInHours.substring(0, b)).val("");
			$j("#" + medicationRows[i].timeInHours).hide();

			var d = medicationRows[i].fviii.indexOf("_span");
			$j("#" + medicationRows[i].fviii.substring(0, d)).val("");
			$j("#" + medicationRows[i].fviii).hide();

			var e = medicationRows[i].vwfag.indexOf("_span");
			$j("#" + medicationRows[i].vwfag.substring(0, e)).val("");
			$j("#" + medicationRows[i].vwfag).hide();

			var f = medicationRows[i].vwfrco.indexOf("_span");
			$j("#" + medicationRows[i].vwfrco.substring(0, f)).val("");
			$j("#" + medicationRows[i].vwfrco).hide();
			
			var j = medicationRows[i].vwfgp1bm.indexOf("_span");
			$j("#" + medicationRows[i].vwfgp1bm.substring(0, j)).val("");
			$j("#" + medicationRows[i].vwfgp1bm).hide();
			
			var g = medicationRows[i].vwfpp.indexOf("_span");
			$j("#" + medicationRows[i].vwfpp.substring(0, g)).val("");
			$j("#" + medicationRows[i].vwfpp).hide();
			
			var k = medicationRows[i].vwfcb.indexOf("_span");
			$j("#" + medicationRows[i].vwfcb.substring(0, k)).val("");
			$j("#" + medicationRows[i].vwfcb).hide();
			
			var h = medicationRows[i].vwfMult.indexOf("_span");
			$j("#" + medicationRows[i].vwfMult.substring(0, h)).val("");
			$j("#" + medicationRows[i].vwfMult).hide();

			$j("#" + medicationRows[i].sampleID).closest("tr").hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + medicationRows[i-1].addRowBtn).show();
			if((i-1) > 0) {
				$j("#" + medicationRows[i-1].delRowBtn).show();
			}
		}
			i++;
		
	}

});

});

