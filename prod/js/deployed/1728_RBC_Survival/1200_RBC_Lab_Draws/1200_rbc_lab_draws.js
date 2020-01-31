var dateRows = new Array(1);

dateRows[0] = {
		ifPreDate : 'fld10050_138457_144669_span',  
		if5minDate : 'fld10050_138442_144654_span',
		if7minDate: 'fld10050_138464_144676_span',
		if10minDate : 'fld10050_138468_144680_span',
		if12minDate : 'fld10050_138477_144689_span',
		if15minDate : 'fld10050_138467_144679_span',
		if30minDate : 'fld10050_138483_144695_span',
		if1hrDate : 'fld10050_138489_144701_span',
		tfPreDate : 'fld10050_138508_144720_span',
		tf1hrDate : 'fld10050_138510_144722_span',
		tf4hrDate : 'fld10050_138514_144726_span',
		copyBtn : 'fld10050_138539_144752_id'
	}

$j(document).ready(function() {
	
	alert("Hello 4");
	
$j(".copyBtn").click(function() {
	
	alert(dateRows[0].ifPreDate);
	var tempDate;
	
	var parentLabel = $j(this).parent("label");
	var labelId = $j(parentLabel).attr("id");

	alert("Test 1");
	
	var a = dateRows[0].ifPreDate.indexOf("_span");
	alert("Test 2");
	tempDate = $j("#" + dateRows[0].ifPreDate.substring(0, a)).val();

	alert(tempDate);
});


});