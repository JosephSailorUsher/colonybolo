//Game Variables
var boardDims = [3, 2];
var term1 = 3;
var term2 = 6;
var answer = 18;
var choices = [3,6,18];
//randomization Variables
var min = 1;
var max = 9;

Reset_Game();
function Build_Game_Board() {

}
function Reset_Game() {
  Display_Problem();
  //clear the results
  $("#results").text("");
  //create the next problem
  New_Problem();
}
function Display_Problem() {
  document.getElementById("problem-display").innerHTML = term1 + " x " + term2 + " = ?";
  document.getElementById("c1").innerHTML = choices[0];
  document.getElementById("c2").innerHTML = choices[1];
  document.getElementById("c3").innerHTML = choices[2];
}
function Check_Answer(c) {
  answer = term1 * term2;
  if(choices[c] == answer) {
    document.getElementById("results").innerHTML = "Correct!";
  }
  else {
    document.getElementById("results").innerHTML = "Incorrect.";
  }
}
function New_Problem() {
  term1 = Math.floor(Math.random() * (+max - +min) + +min);
  term2 = Math.floor(Math.random() * (+max - +min) + +min);
  choices = [
    term1 * Math.floor(Math.random() * (+max - +min) + +min),
    term2 * Math.floor(Math.random() * (+max - +min) + +min),
    term1 * term2];
  choices.sort();
  Display_Problem();
}


//Player Input
document.onkeydown = function(event) {
  //debug
	var key_press = String.fromCharCode(event.keyCode);
	var key_code = event.keyCode;
	document.getElementById('kp').innerHTML = key_press;
    document.getElementById('kc').innerHTML = key_code;
	var status = $("#status");
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
  else if(key_press == "r" || key_press == "R") {
    Reset_Game();
  }
}
document.onkeyup = function(event){
    var key_press = String.fromCharCode(event.keyCode);
	var status = document.getElementById('status');
	status.innerHTML = "UP Event Fired For : "+key_press;
}
