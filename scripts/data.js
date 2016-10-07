//declare the variable
var saveArray = [];
var saveString = ""
function dataManage() {
	saveString = JSON.stringify(saveArray);
	localStorage.setItem("Game of Change Data", saveString);
};

//use this at load of the game to retrieve the save array.
function dataStart() {
	saveString = localStorage.getItem("Game of Change Data");
	saveArray = JSON.stringify(saveString);
};

function dataLoad(slot) {
	console.log("load called slot " + slot);
	//retrieve target data
	saveString = localStorage.getItem("Game of Change Data");
	saveArray = JSON.parse(saveString);
	//set target data
	map = saveArray[slot].map;
	pc = saveArray[slot].pc;
	//need to draw everything. :/ Make sure you do it right.
	renderMap();
};

function dataSave(slot) {
	console.log("save called slot " + slot);
	//retrieve what exists
	saveString = localStorage.getItem("Game of Change Data");
	//parse it to object.
	saveArray = JSON.parse(saveString);
	//modify it.
	saveArray[slot].map = map;
	saveArray[slot].pc = pc;
	//stringify it
	saveString = JSON.stringify(saveArray);
	//store it again.
	localStorage.setItem("Game of Change Data", saveString);
};
