//prevent scroll with browser
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40, 16].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

document.onkeydown = checkKey;

function checkKey(e) {
	e = e || window.event;
	if (e.keyCode == '38') {// up arrow
		if (map.tiles[pc.x][pc.y-1] != null && pc.move == true) {
			for (i=0; i < map.actors.length; i++) {
				if (pc.x === map.actors[i].x && pc.y-1 === map.actors[i].y) {
					console.log(map.actors[i].name + " blocks your way")
					return
				} else {
					pc.y -= 1;
					tick()
				}
			}
		}
	} else if (e.keyCode == '40') { // down arrow
		if (map.tiles[pc.x][pc.y+1] != undefined && pc.move == true) {
			for (i=0; i < map.actors.length; i++) {
				if (pc.x === map.actors[i].x && pc.y+1 === map.actors[i].y) {
					console.log(map.actors[i].name + " blocks your way")
					return
				} else {
					pc.y += 1;
					tick()
				}
			}
		}
	} else if (e.keyCode == '37') { // left arrow
		if (map.tiles[pc.x-1][pc.y] != undefined && pc.move == true) {
			for (i=0; i < map.actors.length; i++) {
				if (pc.x-1 === map.actors[i].x && pc.y === map.actors[i].y) {
					console.log(map.actors[i].name + " blocks your way")
					return
				} else {
					pc.x -= 1;
					tick()
				}
			}
		}
	} else if (e.keyCode == '39') { // right arrow
		if (map.tiles[pc.x+1][pc.y] != undefined && pc.move == true) {
			for (i=0; i < map.actors.length; i++) {
				if (pc.x+1 === map.actors[i].x && pc.y === map.actors[i].y) {
					console.log(map.actors[i].name + " blocks your way")
					return
				} else {
					pc.x += 1;
					tick()
				}
			}
		}
	} else if (e.keyCode == "16") { //shift key
		tick()
	}
};
