//Game Variables
var problems = [3,6];
var answer = 18;
var choices = [3,6,18,36];

function Display_Problem() {
  document.getElementById("problem-display").innerHTML = problems[0] + " x " + problems[1] + " = ?";
  document.getElementById("c1").innerHTML = choices[0];
  document.getElementById("c2").innerHTML = choices[1];
  document.getElementById("c3").innerHTML = choices[2];
  document.getElementById("c4").innerHTML = choices[3];
}
function Check_Answer(i) {
  if(choices[i] == answer) {
    document.getElementById("results").innerHTML = "Correct!";
  }
  else {
    document.getElementById("results").innerHTML = "Incorrect.";
  }
}



Display_Problem();



//Player Input
document.onkeydown = function(event) {
  //debug
	var key_press = String.fromCharCode(event.keyCode);
	var key_code = event.keyCode;
	document.getElementById('kp').innerHTML = key_press;
    document.getElementById('kc').innerHTML = key_code;
	var status = document.getElementById('status');
	status.innerHTML = "DOWN Event Fired For : "+key_press;

  //answer input
  if(key_press == "1") {
    Check_Answer(0);
  }
  else if(key_press == "2") {
    Check_Answer(1);
  }
  else if(key_press == "3") {
    Check_Answer(2);
  }
  else if(key_press == "4") {
    Check_Answer(3);
  }
}
document.onkeyup = function(event){
    var key_press = String.fromCharCode(event.keyCode);
	var status = document.getElementById('status');
	status.innerHTML = "UP Event Fired For : "+key_press;
}
