$j(document).ready(function() {
	<div id="targetImage">
		<img src="../bcw/image/Dental Numbering System.jpg" alt="Tooth Pic" style="width:1501px;height:885px;"/>
	</div>
	
	var test_field = 'fld10050_121655_126118';

	var test_box = document.getElementsByName(test_field);
	
	$j(function() {
		$j("fld10050_121655_126118").position({
			my: "center",
			at: "center",
			of: "#targetImage"
		});
		
	});
	
});
