function scene(scene) {
	con = scene;
	line = 0;

	pc.move = false;
	//disable screen interaction & add the curtain
	document.getElementById("curtainCon").innerHTML += "<div id='curtain'></div>";
	//create scene event listeners
	document.getElementById("curtain").addEventListener("click", function() {next()})
	//load the appropriate scene array with index of line
	con[0]();
	//clear target menu
	document.getElementById("targetMenu").innerHTML = "";
};

function next() {
	// on click, or on space, or on arrow key event listener to add one to index and run the appropriate functions
	if (con[line+1] !== null) {
		document.getElementById("output").innerHTML = "";
		line += 1;
		con[line]();
	}
};

//each array contains functions that will update the screen.

//draw dialogue box which contains name portrait and content. have it just reference the appropriate actor object.

function speak(actor, line) {
	// fill in name
	document.getElementById("speaker").innerHTML = actor;
	//reference appropriate style
	// fill in lines
	document.getElementById("output").innerHTML = line;
};

function addActor(id, z, img, x, y) {
	//create an element.
	document.getElementById("curtainCon").innerHTML += "<div id='"+id+"' class='actorImg' style='z-index: "+z+"; top: "+y+"px; left: "+x+"px;'><img src='"+img+"'></div>";
};

function removeActor(id) {
	//removes the div with the appropriate id
	document.getElementById("curtainCon").removeChild(id);
};

function actorImg(id, img) {
	document.getElementById(id).innerHTML = "<img src='"+img+"'>";
};

function actorIndex(id, z) {
	document.getElementById(id).style.zIndex = z;
};

function actorXY(id, x, y) {
	document.getElementById(id).style.top = y;
	document.getElementById(id).style.left = x;
};

function animateActor(id, anim) {
	//applies a jquery animation to the div id. Jquery animations will be assigned to methods to be called. maybe.
	//will need to find way to pass parameters
};

function updateActor(id, update) {
	//changes the image or expression of an actor
};

function addChoice(text, outcome) {
	//onClick
	//automatically clear everythign once the choice is made
};

function end() {
	document.getElementById("curtainCon").innerHTML = "";
	document.getElementById("speaker").innerHTML = "";
	document.getElementById("output").innerHTML = "";
	pc.move = true;
	npcClick(pc.target);
};


//Have one for calling up a map and selecting a destination
//have another for clicking on a side menu to determine action in that area (or an actor on that screen)
//have another function for calling up encounters, same as callign up scenes.
//have one for the single page menu. Desc. render pc. simple stats. simple states. simple perks. money, items. save and load.
