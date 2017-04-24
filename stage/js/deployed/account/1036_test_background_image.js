$j(document).ready(function() {
	
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
