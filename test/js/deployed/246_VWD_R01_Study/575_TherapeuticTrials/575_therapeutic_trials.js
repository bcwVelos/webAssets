var str = "_";
var nextID;
var fieldElements = [];
var firstIncrement, secondIncrement;
var totalRows = 10;
var labRows = new Array(totalRows);

labRows[0] = {
	sample : 'fld10050_32469_35679_span',
	timeHrs : 'fld10050_32479_35689_span',
	fviii : 'fld10050_32509_35719_span',
	vwfag : 'fld10050_32519_35729_span',
	vwfrco : 'fld10050_32499_35709_span',
	vwfgpbm : 'fld10050_133124_138119_span',
	vwfpp: 'fld10050_32489_35699_span',
	vwfcb : 'fld10050_143159_148313_span',
	vwfMult : 'fld10050_32529_35739_span',
	addRowBtn : 'fld10050_32539_35749_id',
	delRowBtn : 'fld10050_32549_35759_id'
}

for (var i = 1; i < totalRows; i++) {
	labRows[i] = {
		sample : String(generateNextID(labRows[i-1].sample).concat("_span")),
		timeHrs : String(generateNextID(labRows[i-1].timeHrs).concat("_span")),
		fviii : String(generateNextID(labRows[i-1].fviii).concat("_span")),
		vwfag : String(generateNextID(labRows[i-1].vwfag).concat("_span")),
		vwfrco : String(generateNextID(labRows[i-1].vwfrco).concat("_span")),
		vwfgpbm : String(generateNextID(labRows[i-1].vwfgpbm).concat("_span")),
		vwfpp : String(generateNextID(labRows[i-1].vwfpp).concat("_span")),
		vwfcb : String(generateNextID(labRows[i-1].vwfcb).concat("_span")),
		vwfMult : String(generateNextID(labRows[i-1].vwfMult).concat("_span")),
		addRowBtn : String(generateNextID(labRows[i-1].addRowBtn).concat("_id")),
		delRowBtn : String(generateNextID(labRows[i-1].delRowBtn).concat("_id"))
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
	alert("Hello 2");

});

