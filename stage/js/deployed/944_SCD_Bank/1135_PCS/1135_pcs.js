/**
 * 
 */

pcsVariables = {
	pcsWorry: 'fld10050_128373_134361',
	pcsCantGoOn: 'fld10050_128382_134370',
	pcsTerrible: 'fld10050_128383_134371',
	pcsAwful: 'fld10050_128374_134362',
	pcsCantStand: 'fld10050_128380_134368',
	pcsAfraid: 'fld10050_128376_134364',
	pcsPainfulEvents: 'fld10050_128384_134372',
	pcsAnxious: 'fld10050_128385_134373',
	pcsOutOfMind: 'fld10050_128381_134369',
	pcsHowMuchHurts: 'fld10050_128377_134365',
	pcsPainToStop: 'fld10050_128378_134366',
	pcsIntensity: 'fld10050_128386_134374',
	pcsSerious: 'fld10050_128379_134367',
	pcsTotalScore: 'fld10050_128387_134375'
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

