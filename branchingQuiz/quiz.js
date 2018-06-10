var currentNode=0;
var nodes = ["stateGoal", "motive","whatToday","allOrNothing",
				"howItWentBinary","howItWentScale","congratulations","repeatable",
				"encourage","modify"];

var repeatable;
var allOrNone;

function getSuggestions(){
	document.getElementById('today').value = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
}
			
function update(){
	document.getElementById('today').value = "";
	var divID = document.getElementById(nodes[currentNode]);
	divID.style.display = "none";
	
	if (currentNode == 3){ //all or nothing question
		allOrNone = document.querySelector('input[name="allOrNothing"]:checked').value;
		if (allOrNone == "all"){
			currentNode = 4
		} else {
			currentNode = 5;
		}
	} else if (currentNode == 4){ // yes or no success
		var progressBinary = document.querySelector('input[name="binarySuccess"]:checked').value;
		if (progressBinary == "Y"){
			currentNode = 6;
		} else {
			currentNode = 7;
		}
	} else if (currentNode == 5) { //scale success
		var progressScale = document.querySelector('input[name="success"]:checked').value;
		if (progressScale == "1") {
			currentNode = 9;
		} else if (progressScale == "2") {
			currentNode = 7;
		} else {
			currentNode = 6;
		}
	} else if (currentNode == 6) {
		currentNode = 2;
	} else if (currentNode == 7) { //can continue 
		repeatable = document.querySelector('input[name="canContinue"]:checked').value;
		if (repeatable == "Y"){
			if (allOrNone=="all"){
				currentNode = 4;
			} else {
				currentNode = 5;
			}
		} else {
			currentNode = 8;
		}
		
	} else if (currentNode==8){
		currentNode = 2;
	}else {
		
		if (currentNode == 9){ 
			currentNode = 3;
		} else {
			currentNode = currentNode + 1;
		}
	}
	
	divID = document.getElementById(nodes[currentNode]);
	divID.style.display = "block";
}
