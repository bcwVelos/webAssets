function Init() {
  var aa= document.getElementsByTagName("input");
  for (var i =0; i < aa.length; i++){
  if (aa[i].type == 'checkbox' && aa[i].id == "Medication Not in List") {
  if (aa[i].addEventListener) {
aa[i].addEventListener("CheckboxStateChange", OnChangeCheckbox,false);
} } } }
function InitIE8() {
 var aa= document.getElementsByTagName("input");
 for (var i =0; i < aa.length; i++){
     if (aa[i].type == 'checkbox' && aa[i].id == "Medication Not in List") {
  aa[i].attachEvent("onclick",OnChangeCheckboxIE8);
       }
    }
}
function OnChangeCheckbox(event) {
  var checkbox = event.target;
  if (checkbox.checked) {
    var link = "mailto:velossupport@bcw.edu?subject=Encrypt Request to Add Medication to Velos&body=test" + "&body=Medication Name:%0D%0APatient ID:";
    window.location.href = link;
} }
function OnChangeCheckboxIE8(event) {
  var checkbox = event.srcElement;
  if (checkbox.checked) {
    var link = "mailto:velossupport@bcw.edu?subject=Encrypt Request to Add Medication to Velos&body=test" + "&body=Medication Name:%0D%0APatient ID:";
    window.location.href = link;
} }
window.onload = function()
{
  if (document.addEventListener) {
    Init();
  } else {
    InitIE8();
  }
}