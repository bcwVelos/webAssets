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
	
$j(".copyBtn").click(function() {
	
	var tempDate;
	
	var parentLabel = $j(this).parent("label");
	var labelId = $j(parentLabel).attr("id");
	
	var a = dateRows[0].ifPreDate.indexOf("_span");
	tempDate = $j("#" + dateRows[0].ifPreDate.substring(0, a)).val();

	var b = dateRows[0].if5minDate.indexOf("_span");
	$j("#" + dateRows[0].if5minDate.substring(0, b)).val(tempDate);
	
	var c = dateRows[0].if7minDate.indexOf("_span");
	$j("#" + dateRows[0].if7minDate.substring(0, c)).val(tempDate);
	
	var d = dateRows[0].if10minDate.indexOf("_span");
	$j("#" + dateRows[0].if10minDate.substring(0, d)).val(tempDate);
	
	var e = dateRows[0].if12minDate.indexOf("_span");
	$j("#" + dateRows[0].if12minDate.substring(0, e)).val(tempDate);
	
	var f = dateRows[0].if15minDate.indexOf("_span");
	$j("#" + dateRows[0].if15minDate.substring(0, f)).val(tempDate);
	
	var g = dateRows[0].if30minDate.indexOf("_span");
	$j("#" + dateRows[0].if30minDate.substring(0, g)).val(tempDate);
	
	var h = dateRows[0].if1hrDate.indexOf("_span");
	$j("#" + dateRows[0].if1hrDate.substring(0, h)).val(tempDate);
	
	var i = dateRows[0].tfPreDate.indexOf("_span");
	$j("#" + dateRows[0].tfPreDate.substring(0, i)).val(tempDate);
	
	var j = dateRows[0].tf1hrDate.indexOf("_span");
	$j("#" + dateRows[0].tf1hrDate.substring(0, j)).val(tempDate);
	
	var k = dateRows[0].tf4hrDate.indexOf("_span");
	$j("#" + dateRows[0].tf4hrDate.substring(0, k)).val(tempDate);
});


});