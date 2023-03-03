function init(){
  function myAlertFunction(){
    var inputText = document.getElementById('entryinput').value;
	var output = document.getElementById('textoutput');
    output.innerHTML = inputText;
	alert("Member: "+ inputText);
  }
  var alertDiv = document.getElementById('entrybutton');
  alertDiv.addEventListener('click', myAlertFunction);
}
window.addEventListener('load', init);