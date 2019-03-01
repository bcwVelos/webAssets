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

function medicationRow(type, brandName, genericName, ndcType, pharmClass, addRowBtn, delRowBtn, copyBtn, pasteBtn) {
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
var totalRepeatingSections = 15;

//Define the name of the object that will be used to hold the row's data
var rowObjName = "medicationRow";

var tempType = "";
var tempBrandName = "";
var tempGenericName = "";
var tempNdcType = "";
var tempPharmClass = "";

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

//Post Op Day 2
//array to contain objects representing each row for this section
var postOp2_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp2_medicationRows[0] = new medicationRow(
		"fld10050_139654_144689_span",
		"fld10050_139714_144749_span",
		"fld10050_139724_144759_span",
		"fld10050_139704_144739_span",
		"fld10050_139644_144679_span",
		"fld10050_139684_144719_id",
		"fld10050_139694_144729_id",
		"fld10050_139664_144699_id",
		"fld10050_139674_144709_id");

//Post Op Day 3
//array to contain objects representing each row for this section
var postOp3_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp3_medicationRows[0] = new medicationRow(
		"fld10050_139787_144822_span",
		"fld10050_139757_144792_span",
		"fld10050_139767_144802_span",
		"fld10050_139747_144782_span",
		"fld10050_139777_144812_span",
		"fld10050_139797_144832_id",
		"fld10050_139807_144842_id",
		"fld10050_139817_144852_id",
		"fld10050_139827_144862_id");

//Post Op Day 4
//array to contain objects representing each row for this section
var postOp4_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp4_medicationRows[0] = new medicationRow(
		"fld10050_139870_144905_span",
		"fld10050_139890_144925_span",
		"fld10050_139900_144935_span",
		"fld10050_139880_144915_span",
		"fld10050_139910_144945_span",
		"fld10050_139850_144885_id",
		"fld10050_139860_144895_id",
		"fld10050_139930_144965_id",
		"fld10050_139920_144955_id");

//Post Op Day 5
//array to contain objects representing each row for this section
var postOp5_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp5_medicationRows[0] = new medicationRow(
		"fld10050_140013_145048_span",
		"fld10050_139963_144998_span",
		"fld10050_139973_145008_span",
		"fld10050_139953_144988_span",
		"fld10050_139983_145018_span",
		"fld10050_139993_145028_id",
		"fld10050_140003_145038_id",
		"fld10050_140033_145068_id",
		"fld10050_140023_145058_id");

//Post Op Day 6
//array to contain objects representing each row for this section
var postOp6_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp6_medicationRows[0] = new medicationRow(
		"fld10050_140126_145161_span",
		"fld10050_140076_145111_span",
		"fld10050_140086_145121_span",
		"fld10050_140066_145101_span",
		"fld10050_140096_145131_span",
		"fld10050_140106_145141_id",
		"fld10050_140116_145151_id",
		"fld10050_140056_145091_id",
		"fld10050_140136_145171_id");


//Post Op Day 7
//array to contain objects representing each row for this section
var postOp7_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp7_medicationRows[0] = new medicationRow(
		"fld10050_140169_145204_span",
		"fld10050_140199_145234_span",
		"fld10050_140209_145244_span",
		"fld10050_140189_145224_span",
		"fld10050_140219_145254_span",
		"fld10050_140179_145214_id",
		"fld10050_140229_145264_id",
		"fld10050_140239_145274_id",
		"fld10050_140159_145194_id");

//Post Op Day 8
//array to contain objects representing each row for this section
var postOp8_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp8_medicationRows[0] = new medicationRow(
		"fld10050_140262_145297_span",
		"fld10050_140282_145317_span",
		"fld10050_140292_145327_span",
		"fld10050_140272_145307_span",
		"fld10050_140302_145337_span",
		"fld10050_140332_145367_id",
		"fld10050_140342_145377_id",
		"fld10050_140312_145347_id",
		"fld10050_140322_145357_id");

//Post Op Day 9
//array to contain objects representing each row for this section
var postOp9_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp9_medicationRows[0] = new medicationRow(
		"fld10050_140415_145450_span",
		"fld10050_140375_145410_span",
		"fld10050_140385_145420_span",
		"fld10050_140365_145400_span",
		"fld10050_140405_145440_span",
		"fld10050_140435_145470_id",
		"fld10050_140425_145460_id",
		"fld10050_140445_145480_id",
		"fld10050_140395_145430_id");

//Post Op Day 10
//array to contain objects representing each row for this section
var postOp10_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp10_medicationRows[0] = new medicationRow(
		"fld10050_140478_145513_span",
		"fld10050_140508_145543_span",
		"fld10050_140488_145523_span",
		"fld10050_140498_145533_span",
		"fld10050_140518_145553_span",
		"fld10050_140538_145573_id",
		"fld10050_140528_145563_id",
		"fld10050_140468_145503_id",
		"fld10050_140548_145583_id");

//Post Op Day 11
//array to contain objects representing each row for this section
var postOp11_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp11_medicationRows[0] = new medicationRow(
		"fld10050_140631_145666_span",
		"fld10050_140591_145626_span",
		"fld10050_140601_145636_span",
		"fld10050_140581_145616_span",
		"fld10050_140611_145646_span",
		"fld10050_140641_145676_id",
		"fld10050_140621_145656_id",
		"fld10050_140651_145686_id",
		"fld10050_140571_145606_id");

//Post Op Day 12
//array to contain objects representing each row for this section
var postOp12_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp12_medicationRows[0] = new medicationRow(
		"fld10050_140695_145730_span",
		"fld10050_140715_145750_span",
		"fld10050_140725_145760_span",
		"fld10050_140705_145740_span",
		"fld10050_140735_145770_span",
		"fld10050_140745_145780_id",
		"fld10050_140685_145720_id",
		"fld10050_140755_145790_id",
		"fld10050_140675_145710_id");

//Post Op Day 13
//array to contain objects representing each row for this section
var postOp13_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp13_medicationRows[0] = new medicationRow(
		"fld10050_140778_145813_span",
		"fld10050_140798_145833_span",
		"fld10050_140808_145843_span",
		"fld10050_140788_145823_span",
		"fld10050_140818_145853_span",
		"fld10050_140828_145863_id",
		"fld10050_140838_145873_id",
		"fld10050_140848_145883_id",
		"fld10050_140858_145893_id");

//Post Op Day 14
//array to contain objects representing each row for this section
var postOp14_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp14_medicationRows[0] = new medicationRow(
		"fld10050_140961_145996_span",
		"fld10050_140911_145946_span",
		"fld10050_140921_145956_span",
		"fld10050_140901_145936_span",
		"fld10050_140931_145966_span",
		"fld10050_140941_145976_id",
		"fld10050_140951_145986_id",
		"fld10050_140881_145916_id",
		"fld10050_140891_145926_id");

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

//******* BEGIN COPY BUTTON LISTENER ***************//	
$j('.[class^="copyBtn"]').click(function(event) {

	var parentLabel = $j(this).parent("label");
	var labelId = $j(parentLabel).attr("id");

	var x;
	var i = 0;
	
	var thisarray = window["postOp" + $j(this).attr("class").substring(7) + "_medicationRows"];

	while (!Boolean(x)) {

		var rowName = thisarray[i].copyBtn;

		if (rowName === labelId) {
			x = "True";

			var a = thisarray[i].type.indexOf("_span");
			tempMedType = $j("#" + thisarray[i].type.substring(0, a)).val();
			alert(tempMedType);

			var b = thisarray[i].brandName.indexOf("_span");
			tempBrandName = $j("#" + thisarray[i].brandName.substring(0, b)).val();
			alert(tempBrandName);
			
			var c = thisarray[i].genericName.indexOf("_span");
			tempGenericName = $j("#" + thisarray[i].genericName.substring(0, c)).val();
			alert(tempGenericName);
			
			var d = thisarray[i].ndcType.indexOf("_span");
			tempNdcType = $j("#" + thisarray[i].ndcType.substring(0, d)).val();
			alert(tempNdcType);
			
			var e = thisarray[i].pharmClass.indexOf("_span");
			tempPharmClass = $j("#" + thisarray[i].pharmClass.substring(0, e)).val();
			alert(tempPharmClass);
			

		}

		i++;
		
	}
	

});

//******* BEGIN PASTE BUTTON LISTENER ***************//	
$j('.[class^="pasteBtn"]').click(function(event) {

		var parentLabel = $j(this).parent("label");
		var labelId = $j(parentLabel).attr("id");
	
		var x;
		var i = 0;
		
		var thisarray = window["postOp" + $j(this).attr("class").substring(8) + "_medicationRows"];

		while (!Boolean(x)) {
	
			var rowName = thisarray[i].pasteBtn;
	
			if (rowName === labelId) {
				x = "True";
	
				var a = thisarray[i].type.indexOf("_span");
				$j("#" + thisarray[i].type.substring(0, a)).val(tempMedType);
	
				var b = thisarray[i].brandName.indexOf("_span");
				$j("#" + thisarray[i].brandName.substring(0, b)).val(tempBrandName);
				
				var c = thisarray[i].genericName.indexOf("_span");
				$j("#" + thisarray[i].genericName.substring(0, c)).val(tempGenericName);
				
				var d = thisarray[i].ndcType.indexOf("_span");
				$j("#" + thisarray[i].ndcType.substring(0, d)).val(tempNdcType);
				
				var e = thisarray[i].pharmClass.indexOf("_span");
				$j("#" + thisarray[i].pharmClass.substring(0, e)).val(tempPharmClass);
				
	
			}
	
			i++;
		}
	

});

});