//clear map function
function clearMap() {
	for (i = 0; i <=100; i++) {
		map.tiles[i] = [];
	}
};

//map render function
function renderMap(target) {
	//declare the blank ink variable, and the map handler
	var ink = "";
	//draw the tiles within the map
	for (x = 0; x < 100; x++) {
		for (y = 0; y < 100; y++) {
			if (map.tiles[x][y] != undefined && map.tiles[x][y].real === true  ) {
				ink += "<div class='tile' style='top: "+ (y*25) +"px; left: "+ (x*40 - (y*25)) +"px; background-color: "+map.tiles[x][y].color +"'></div>"
			}
		}
	};
	//draw each actor
	for (i = 0; i < map.actors.length; i++) {
		ink += "<div id='"+map.actors[i].id +"' class='actor' style='top: "+ (map.actors[i].y*25 -32) +"px; left: "+ (map.actors[i].x*40 - (map.actors[i].y*25)-6) +"px; z-index: " + map.actors[i].y +"; background-image: "+ map.actors[i].sprite +"' onclick='npcClick("+i+")'></div>"
	};
	//draw pc
	ink += "<div id='pcSprite' style='top: "+ (pc.y*25 -32)+"px; left: "+ (pc.x*40 - (pc.y*25)-6) +"px; background-image: "+ pc.sprite.body +"'></div>"
	//draw ink to Map
	document.getElementById("mapContainer").innerHTML = ink;
	//move the map Container to pc being center perspective
	document.getElementById("mapContainer").style.top = (pc.y*25 - 360)*-1 -50+"px";
	document.getElementById("mapContainer").style.left = (pc.x*40 - (pc.y*25) - 600)*-1+50+"px";
	//clear ink
	ink="";
};

function updateMap() {
	//draw new actors
	for (i=0; i< map.load.length; i++) {
		document.getElementById("mapContainer").innerHTML += "<div id='"+map.actors[i].id +"' class='actor' style='top: "+ (map.actors[i].y*25 -32) +"px; left: "+ (map.actors[i].x*40 - (map.actors[i].y*25)-6) +"px; z-index: " + map.actors[i].y +"; background-image: "+ url("assets/actors/elf.png") +"' onclick='npcClick("+i+")'></div>";
		// pass all elements to the actors array
		map.actors.push(map.load[i]);
	};
	// clear map load buffer
	map.load = [];
	//update pc placement
	document.getElementById("pcSprite").style.top = (pc.y*25 -32)+"px";
	document.getElementById("pcSprite").style.left = (pc.x*40 - (pc.y*25)-6)+"px";
	document.getElementById("pcSprite").style.zIndex = pc.y;
	//move the map Container to pc being center perspective
	document.getElementById("mapContainer").style.top = (pc.y*25 - 360)*-1 -50+"px";
	document.getElementById("mapContainer").style.left = (pc.x*40 - (pc.y*25) - 600)*-1+50+"px";
}

function drawPC() {
	// create a canvas group (since it's the first time we're getting it)
	var canvasGroup = da.getCanvasGroup("pcImg", {
	// provide some styling options; width and height are particularly important
	width: 400,
	height: 600,
	});
}
