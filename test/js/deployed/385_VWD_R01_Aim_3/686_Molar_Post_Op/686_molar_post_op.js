//********* BEGIN DATA OBJECT FUNCTIONS **********//

//Define Object that will hold the the ids to represent each section of a repeating row
//Create 2 constructor methods - one is empty, the other takes in all the values as parameters.
function medicationRow(){
    this.type = null;
    this.brandName = null;
    this.genericName = null;
    this.ndcType = null;
    this.pharmClass = null;
    this.copyBtn = null;
    this.pasteBtn = null;
    this.addRowBtn = null;
    this.delRowBtn = null;
}

function medicationRow(type, brandName, genericName, ndcType, pharmClass, copyBtn, pasteBtn, addRowBtn, delRowBtn) {
    this.type = type;
    this.brandName = brandName;
    this.genericName = genericName;
    this.ndcType = ndcType;
    this.pharmClass = pharmClass;
    this.copyBtn = copyBtn;
    this.pasteBtn = pasteBtn;
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
	"fld10050_57667_60944_span",
	"fld10050_57697_60974_span", 
	"fld10050_57717_60994_span",
	"fld10050_57707_60984_span", 
	"fld10050_57727_61004_span",
	"fld10050_140983_146019_id",
	"fld10050_140993_146029_id",
	"fld10050_57677_60954_id", 
	"fld10050_57687_60964_id");

//Post Op Day 1 
//array to contain objects representing each row for this section
var postOp1_medicationRows = [];
//Define identifiers for the first row in the repeating data set.
postOp1_medicationRows[0] = new medicationRow(
	"fld10050_57790_61067_span",
	"fld10050_57760_61037_span", 
	"fld10050_57770_61047_span",
	"fld10050_57750_61027_span", 
	"fld10050_57780_61057_span",	
	"fld10050_141023_146059_id",
	"fld10050_141033_146069_id",
	"fld10050_57800_61077_id", 
	"fld10050_57810_61087_id");

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
	"fld10050_141043_146079_id",
	"fld10050_141053_146089_id",
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
	"fld10050_141063_146099_id",
	"fld10050_141073_146109_id",
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
	"fld10050_141083_146119_id",
	"fld10050_141093_146129_id",
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
	"fld10050_141103_146139_id",
	"fld10050_141113_146149_id",
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
	"fld10050_141123_146159_id",
	"fld10050_141133_146169_id",
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
	"fld10050_141143_146179_id",
	"fld10050_141203_146239_id",
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
	"fld10050_141153_146189_id",
	"fld10050_141163_146199_id",
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
	"fld10050_141173_146209_id",
	"fld10050_141183_146219_id",
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
	"fld10050_141193_146229_id",
	"fld10050_141213_146249_id",
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
	"fld10050_141223_146259_id",
	"fld10050_141233_146269_id",
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
	"fld10050_141243_146279_id",
	"fld10050_141253_146289_id",
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
	"fld10050_141263_146299_id",
	"fld10050_141273_146309_id",
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
	"fld10050_141003_146039_id",
	"fld10050_141013_146049_id",
	"fld10050_58869_62146_id", 
	"fld10050_58879_62156_id");

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
$j('[class^="addBtn"]').click(function(event) {
	

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
			$j("#" + thisarray[i+1].copyBtn).show();
			$j("#" + thisarray[i+1].pasteBtn).show();
			$j("#" + thisarray[i+1].delRowBtn).show();

			
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
$j('[class^="deleteBtn"]').click(function(event) {
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
$j('[class^="copyBtn"]').click(function(event) {

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

			var b = thisarray[i].brandName.indexOf("_span");
			tempBrandName = $j("#" + thisarray[i].brandName.substring(0, b)).val();
			
			var c = thisarray[i].genericName.indexOf("_span");
			tempGenericName = $j("#" + thisarray[i].genericName.substring(0, c)).val();
			
			var d = thisarray[i].ndcType.indexOf("_span");
			tempNdcType = $j("#" + thisarray[i].ndcType.substring(0, d)).val();
			
			var e = thisarray[i].pharmClass.indexOf("_span");
			tempPharmClass = $j("#" + thisarray[i].pharmClass.substring(0, e)).val();

		}

		i++;
		
	}
	

});

//******* BEGIN PASTE BUTTON LISTENER ***************//	
$j('[class^="pasteBtn"]').click(function(event) {

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