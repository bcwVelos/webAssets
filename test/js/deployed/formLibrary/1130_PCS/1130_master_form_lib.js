/**
 * 
 */
pcsVariables = {
	pcsWorryField = 'fld10050_128106_133034';
	/* pcsCantGoOn = 'fld10050_128107_133035';
	pcsTerrible = 'fld10050_128108_133036';
	pcsAwful = 'fld10050_128093_133024';
	pcsCantStand = 'fld10050_128109_133037';
	pcsAfraid = 'fld10050_128110_133038';
	pcsPainfulEvents = 'fld10050_128111_133039';
	pcsAnxious = 'fld10050_128112_133040';
	pcsOutOfMind = 'fld10050_128113_133041';
	pcsHowMuchHurts = 'fld10050_128114_133042';
	pcsPainToStop = 'fld10050_128115_133043';
	pcsIntensity = 'fld10050_128116_133044';
	pcsSerious = 'fld10050_128117_133045';*/
	pcsTotalScore = 'fld10050_128118_133046';
}

var formStatus = document.getElementsByName('er_def_formstat');

$j(document).ready(function() {
	
	$j('.[class^="calculateBtn"]').click(function(event) {
		calcScore();
	});
	
	$j('.[id^="submit_btn"]').click(function(event) {
		calcScore();
	});
});
