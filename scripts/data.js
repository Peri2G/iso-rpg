//declare the variable
var saveArray = [];
var saveString = ""
var saveTime;
function dataManage() {
	saveString = JSON.stringify(saveArray);
	localStorage.setItem("Game of Change Data", saveString);
};

//use this at load of the game to retrieve the save array.
function dataStart() {
	//retrieve what exists
	saveString = localStorage.getItem("Game of Change Data");
	//parse it to object.
	saveArray = JSON.parse(saveString);
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
	var d = new Date();
	function AmPm(){if(d.getHours()<12){return "AM"} else {return "PM"}};
	var n = month(d.getMonth()+1) +" "+ d.getDate() +" "+ d.getHours()%12 +":"+ d.getMinutes() + AmPm();
	saveArray[slot].date = n;
	//stringify it
	saveString = JSON.stringify(saveArray);
	//store it again.
	localStorage.setItem("Game of Change Data", saveString);
	sysCall();
	sysCall();
};

//date number to name
function month(x) {
	switch(x) {
		case 1: return "January";
			break;
		case 2: return "February";
			break;
		case 3: return "March";
			break;
		case 4: return "April";
			break;
		case 5: return "May";
			break;
		case 6: return "June";
			break;
		case 7: return "July";
			break;
		case 8: return "August";
			break;
		case 9: return "September";
			break;
		case 10: return "October";
			break;
		case 11: return "November";
			break;
		case 12: return "Decemeber";
			break;
	}

}
