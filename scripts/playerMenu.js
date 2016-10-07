function selfCall() {
	//clear existing menu
	menuClose()
	//define menu content
	var menuContent = "<div id='exit' onClick='menuClose()'>Close Menu</div> <div id='desc'></div> ";
	//check for walk == true
	if (pc.move == true) {
		document.getElementById("menuCurtainCon").innerHTML = "<div id='curtain'></div>";
		document.getElementById("board").innerHTML += "<div id='menu' style='overflow: scroll;'></div>";
		document.getElementById("menu").innerHTML = menuContent;
		pc.move = false;
		document.getElementById('desc').innerHTML = "this is where the description goes. "
	};
	//add appropriate event listeners,
	//every item will display its stats and description in the output menu
};
