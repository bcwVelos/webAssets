//********* BEGIN DATA OBJECT FUNCTIONS **********//

//Define Object that will hold the the ids to represent each section of a repeating row
//Create 2 constructor methods - one is empty, the other takes in all the values as parameters.
function medicationRow(){
    this.type = null;
    this.brandName = null;
    this.genericName = null;
    this.ndcType = null;
    this.pharmClass = null;
    this.addRowBtn = null;
    this.delRowBtn = null;
    this.copyBtn = null;
    this.pasteBtn = null;
}

function medicationRow(type, brandName, genericName, ndcType, pharmClass, addRowBtn, delRowBtn) {
    this.type = type;
    this.brandName = brandName;
    this.genericName = genericName;
    this.ndcType = ndcType;
    this.pharmClass = pharmClass;
    this.addRowBtn = addRowBtn;
    this.delRowBtn = delRowBtn;
    this.copyBtn = copyBtn;
    this.pasteBtn = pasteBtn;
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

function buildMedRows(totalRows, rowArray, rowObjectName) {
	for (i = 1; i < totalRows; i++) { 
		rowArray[i] =  new window[rowObjectName]();
		for (var name in rowArray[i-1]) {
			rowArray[i][name] = parseFormReference(rowArray[i-1][name]);
		}
	}
}
//******* END HELPER FUNCTIONS ***************//

//******* BEGIN DATA DEFINITIONS ***************//
//Define the total number of sections with the same data repeated.
var totalRepeatingSections = 2;

//Define the name of the object that will be used to hold the row's data
var rowObjName = "medicationRow";

//Number of rows
var postOp0_rowNum = 10;
var postOp1_rowNum = 10;
var postOp2_rowNum = 10;
var postOp3_rowNum = 10;
var postOp4_rowNum = 10;
var postOp5_rowNum = 10;
var postOp6_rowNum = 10;
var postOp7_rowNum = 10;
var postOp8_rowNum = 10;
var postOp9_rowNum = 10;
var postOp10_rowNum = 10;
var postOp11_rowNum = 10;
var postOp12_rowNum = 10;
var postOp13_rowNum = 10;
var postOp14_rowNum = 10;

//Post Op Day 0
//array to contain objects representing each row
var postOp0_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp0_medicationRows[0] = new medicationRow(
	"fld10050_139438_144473_span",
	"fld10050_139468_144503_span",
	"fld10050_139488_144523_span",
	"fld10050_139478_144513_span",
	"fld10050_139498_144533_span",
	"fld10050_139448_144483_id",
	"fld10050_139458_144493_id",
	"fld10050_139508_144543_id",
	"fld10050_139518_144553_id");

//Post Op Day 1 
//array to contain objects representing each row for this section
var postOp1_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp1_medicationRows[0] = new medicationRow(
	"fld10050_139601_144636_span",
	"fld10050_139571_144606_span",
	"fld10050_139581_144616_span",
	"fld10050_139561_144596_span",
	"fld10050_139591_144626_span",
	"fld10050_139611_144646_id",
	"fld10050_139621_144656_id",
	"fld10050_139541_144576_id",
	"fld10050_139551_144586_id");
/*
//Post Op Day 2
//array to contain objects representing each row for this section
var postOp2_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp2_medicationRows[0] = new medicationRow(
	"fld10050_57893_61170_span",
	"fld10050_57863_61140_span", 
	"fld10050_57873_61150_span",
	"fld10050_57853_61130_span", 
	"fld10050_57883_61160_span",
	"fld10050_57833_61110_id", 
	"fld10050_57843_61120_id");

//Post Op Day 3
//array to contain objects representing each row for this section
var postOp3_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp3_medicationRows[0] = new medicationRow(
	"fld10050_57956_61233_span",
	"fld10050_57926_61203_span", 
	"fld10050_57936_61213_span",
	"fld10050_57916_61193_span", 
	"fld10050_57946_61223_span",
	"fld10050_57966_61243_id", 
	"fld10050_57976_61253_id");

//Post Op Day 4
//array to contain objects representing each row for this section
var postOp4_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp4_medicationRows[0] = new medicationRow(
	"fld10050_58019_61296_span",
	"fld10050_58039_61316_span", 
	"fld10050_58049_61326_span",
	"fld10050_58029_61306_span", 
	"fld10050_58059_61336_span",
	"fld10050_57999_61276_id", 
	"fld10050_58009_61286_id");

//Post Op Day 5
//array to contain objects representing each row for this section
var postOp5_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp5_medicationRows[0] = new medicationRow(
	"fld10050_58142_61419_span",
	"fld10050_58092_61369_span", 
	"fld10050_58102_61379_span",
	"fld10050_58082_61359_span", 
	"fld10050_58112_61389_span",
	"fld10050_58122_61399_id", 
	"fld10050_58132_61409_id");

//Post Op Day 6
//array to contain objects representing each row for this section
var postOp6_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp6_medicationRows[0] = new medicationRow(
	"fld10050_58225_61502_span",
	"fld10050_58175_61452_span", 
	"fld10050_58185_61462_span",
	"fld10050_58165_61442_span", 
	"fld10050_58195_61472_span",
	"fld10050_58205_61482_id", 
	"fld10050_58215_61492_id");


//Post Op Day 7
//array to contain objects representing each row for this section
var postOp7_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp7_medicationRows[0] = new medicationRow(
	"fld10050_58248_61525_span",
	"fld10050_58278_61555_span", 
	"fld10050_58288_61565_span",
	"fld10050_58268_61545_span", 
	"fld10050_58298_61575_span",
	"fld10050_58258_61535_id", 
	"fld10050_58308_61585_id");

//Post Op Day 8
//array to contain objects representing each row for this section
var postOp8_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp8_medicationRows[0] = new medicationRow(
	"fld10050_58351_61628_span",
	"fld10050_58371_61648_span", 
	"fld10050_58381_61658_span",
	"fld10050_58361_61638_span", 
	"fld10050_58391_61668_span",
	"fld10050_58331_61608_id", 
	"fld10050_58341_61618_id");

//Post Op Day 9
//array to contain objects representing each row for this section
var postOp9_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp9_medicationRows[0] = new medicationRow(
	"fld10050_58454_61731_span",
	"fld10050_58424_61701_span", 
	"fld10050_58434_61711_span",
	"fld10050_58414_61691_span", 
	"fld10050_58444_61721_span",
	"fld10050_58474_61751_id", 
	"fld10050_58464_61741_id");

//Post Op Day 10
//array to contain objects representing each row for this section
var postOp10_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp10_medicationRows[0] = new medicationRow(
	"fld10050_58497_61774_span",
	"fld10050_58527_61804_span", 
	"fld10050_58507_61784_span",
	"fld10050_58517_61794_span", 
	"fld10050_58537_61814_span",
	"fld10050_58557_61834_id", 
	"fld10050_58547_61824_id");

//Post Op Day 11
//array to contain objects representing each row for this section
var postOp11_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp11_medicationRows[0] = new medicationRow(
	"fld10050_58630_61907_span",
	"fld10050_58590_61867_span", 
	"fld10050_58600_61877_span",
	"fld10050_58580_61857_span", 
	"fld10050_58610_61887_span",
	"fld10050_58640_61917_id", 
	"fld10050_58620_61897_id");

//Post Op Day 12
//array to contain objects representing each row for this section
var postOp12_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp12_medicationRows[0] = new medicationRow(
	"fld10050_58673_61950_span",
	"fld10050_58693_61970_span", 
	"fld10050_58703_61980_span",
	"fld10050_58683_61960_span", 
	"fld10050_58713_61990_span",
	"fld10050_58723_62000_id", 
	"fld10050_58663_61940_id");

//Post Op Day 13
//array to contain objects representing each row for this section
var postOp13_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp13_medicationRows[0] = new medicationRow(
	"fld10050_58746_62023_span",
	"fld10050_58766_62043_span", 
	"fld10050_58776_62053_span",
	"fld10050_58756_62033_span", 
	"fld10050_58786_62063_span",
	"fld10050_58796_62073_id", 
	"fld10050_58806_62083_id");

//Post Op Day 14
//array to contain objects representing each row for this section
var postOp14_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp14_medicationRows[0] = new medicationRow(
	"fld10050_58889_62166_span",
	"fld10050_58839_62116_span", 
	"fld10050_58849_62126_span",
	"fld10050_58829_62106_span", 
	"fld10050_58859_62136_span",
	"fld10050_58869_62146_id", 
	"fld10050_58879_62156_id");
*/
//******* END DATA DEFINITIONS ***************//



$j(document).ready(function() {

//******* BEGIN MAIN CODING LOGIC  ***************//

//hide the comments label- we never want to see it
$j('td:contains("Comments")').hide();	

//for each repeating section
for (var s = 0; s < totalRepeatingSections; s++) {
	
		var thisarray = window["postOp" + s + "_medicationRows"];
	    var thisRowNum = window["postOp" + s + "_rowNum"];

   		//First - build out the rows that will be referenced.
		buildMedRows(thisRowNum, thisarray, rowObjName);

	    // hide the delete Button in the first row - it should never be seen
		$j("#" + thisarray[0].delRowBtn).hide();
	
	    // Start the for loop in the second row (array# 1) because the first row
	    // will always display.
		for ( var i = 1; i < thisRowNum; i++) {
			
			// when the form loads, check to see if there is data populated in the rows.
			var a = thisarray[i].type.indexOf("_span");
			var b = thisarray[i].brandName.indexOf("_span");
			
			//Check if the Type dropdown has an option selected OR
			//Check if the Brand Name has data in it
			//If either of these are True - assume that there are values for all columns and check the next row.
			if ($j("#" + thisarray[i].type.substring(0, a) + " option:selected").text() != "Select an Option" ||
			$j("#" + thisarray[i].brandName.substring(0, b)).val() != "")
			{
				//Hide the add button in the previous row. 
				$j("#" + thisarray[i-1].addRowBtn).hide();
				$j("#" + thisarray[i-1].delRowBtn).hide();
				
				if(i == (Number(thisRowNum)-1)){
					$j("#" + thisarray[i].addRowBtn).hide();
				}
				
			} else {
				//There is no data in this row.
				//Make sure the add and delete buttons are shown for the previous row.
				$j("#" + thisarray[i-1].addRowBtn).show();
				if((i-1) > 0){
					$j("#" + thisarray[i-1].delRowBtn).show();
				}
				
				//Hide this row.
				$j("#" + thisarray[i].type).closest("tr").hide();
				
			}
		}	

	}

//******* END MAIN CODING LOGIC  ***************//

//******* BEGIN ADD BUTTON LISTENER ***************//
$j('.[class^="addBtn"]').click(function(event) {
	

	var parentLabel = $j(this).parent("label");
	var labelId = $j(parentLabel).attr("id");

	var x;
	var i = 0;
	
	var thisarray = window["postOp" + $j(this).attr("class").substring(6) + "_medicationRows"];

	while (!Boolean(x)) {
		var rowName = thisarray[i].addRowBtn;
		if (rowName === labelId) {

			x = "True";
			//Hide the delete and add buttons in this row
			if(i < thisarray.length) {
				if(i != (thisarray.length-1)) {
					$j("#" + thisarray[i].delRowBtn).hide();
				}
				$j("#" + thisarray[i].addRowBtn).hide();

			}
			
			//Show all values in row where the add button was selected
			$j("#" + thisarray[i+1].type).closest("tr").show();
			$j("#" + thisarray[i+1].type).show();
			$j("#" + thisarray[i+1].type).siblings().show();
			$j("#" + thisarray[i+1].brandName).show();
			$j("#" + thisarray[i+1].genericName).show();
			$j("#" + thisarray[i+1].ndcType).show();
			$j("#" + thisarray[i+1].pharmClass).show();
			$j("#" + thisarray[i+1].delRowBtn).show();
			$j("#" + thisarray[i+1].copyBtn).show();
			$j("#" + thisarray[i+1].pasteBtn).show();

			
			if((i+1) < (thisarray.length -1)) {
				$j("#" + thisarray[i+1].addRowBtn).show();
			}

			if((i+1) === (thisarray.length -1)) {
				$j("#" + thisarray[i+1].addRowBtn).hide();
			} 

		} 

		i++;
		
	}
	

});

//******* END ADD BUTTON LISTENER ***************//


//******* BEGIN DELETE BUTTON LISTENER ***************//
$j('.[class^="deleteBtn"]').click(function(event) {
	var parentLabel = $j(this).parent("label");
	var labelId = $j(parentLabel).attr("id");

	var y;
	var i = 0;
	
	var thisarray = window["postOp" + $j(this).attr("class").substring(9) + "_medicationRows"];

	while (!Boolean(y)) {
		var rowName = thisarray[i].delRowBtn;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			
			for (var name in thisarray[i]) {
				var a = thisarray[i][name].indexOf("_span");
				if (a < 0) {
					a = thisarray[i][name].indexOf("_id");
				}
				$j("#" + thisarray[i][name].substring(0, a)).val("");
				$j("#" + thisarray[i][name]).hide();
				$j("#" + thisarray[i][name]).siblings().hide();

			}

			$j("#" + thisarray[i].type).closest("tr").hide();

			//show the Add and Delete Button on the previous row
			$j("#" + thisarray[i-1].addRowBtn).show();
			if((i-1) > 0) {
				$j("#" + thisarray[i-1].delRowBtn).show();
			}
		}
			i++;
		
	}

});
//******* END DELETE BUTTON LISTENER ***************//	

});