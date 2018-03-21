/**
 * 
 */

pcsVariables = {
	pcsWorry: 'fld10050_125650_131165',
	pcsCantGoOn: 'fld10050_125659_131174',
	pcsTerrible: 'fld10050_125660_131175',
	pcsAwful: 'fld10050_125651_131166',
	pcsCantStand: 'fld10050_125657_131172',
	pcsAfraid: 'fld10050_125653_131168',
	pcsPainfulEvents: 'fld10050_125661_131176',
	pcsAnxious: 'fld10050_125662_131177',
	pcsOutOfMind: 'fld10050_125658_131173',
	pcsHowMuchHurts: 'fld10050_125654_131169',
	pcsPainToStop: 'fld10050_125655_131170',
	pcsIntensity: 'fld10050_125663_131178',
	pcsSerious: 'fld10050_125656_131171',
	pcsTotalScore: 'fld10050_125664_131179'
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

