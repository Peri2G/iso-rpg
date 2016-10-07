function menuClose() {
	var el = document.getElementById("menu");
	if (el !== null) {
		document.getElementById("menuCurtainCon").innerHTML = "";
		el.parentNode.removeChild(el);
		pc.move = true;
	};
	document.getElementById("output").innerHTML = "";
};


function selfCall() {
	//clear existing menu
	menuClose()
	//define menu content
	var menuContent = "<div id='exit' onClick='menuClose()'>Close Menu</div> <div id='desc'></div>";
	//check for walk == true
	if (pc.move == true) {
		document.getElementById("menuCurtainCon").innerHTML = "<div id='curtain'></div>";
		var div = document.createElement("div");
		div.id = "menu";
		document.getElementById("board").appendChild(div);
		//document.getElementById("board").innerHTML += "<div id ='menu'></div>";
		document.getElementById("menu").innerHTML = menuContent;
		document.getElementById('desc').innerHTML = "this is where the description goes."
		pc.move = false;
	};
	//add appropriate event listeners,
	//every item will display its stats and description in the output menu
};
