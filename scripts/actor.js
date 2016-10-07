 //actors
function actor(na, de, ta, us, ai, x, y, sp, pi) {
	this.id = map.actors.length;
	this.name = na;
	//what to show when selected.
	this.desc = de;
	//contains all appropriate if statements in 0 index
	this.talk = ta;
	//on adjacent function (attack talk, trap etc.)
	this.use = us;
	this.ai = ai;
	//coordinates
	this.x = x;
	this.y = y;
	//sprite
	this.sprite = 'url("'+ sp +'")';
	//pic
	this.pic = pi;
	//onclick
	this.click = "standard";
	//need stats and info
	//need on defeat function
	//need on victory function (these will be referred to within the appropriate conversation array.)
};


function wander(i) {
	var north = true;
	var south = true;
	var east = true;
	var west = true;
	var target = map.actors[i];
	var go = [];
	//check adjacent tiles for pc
	if (target.x == pc.x && target.y -1 == pc.y) { north = false };
	if (target.x == pc.x && target.y +1 == pc.y) { south = false };
	if (target.x +1 == pc.x && target.y == pc.y) { east = false };
	if (target.x - 1 == pc.x && target.y == pc.y) { west = false };
	// to break just add break.wander or return
	//check adjacent tiles for other actors
	for (var i2 = 0; i2 < map.actors.length; i2 ++) {
		if (target.x == map.actors[i2].x && target.y -1 == map.actors[i2].y) { north = false };
		if (target.x == map.actors[i2].x && target.y +1 == map.actors[i2].y) { south = false };
		if (target.x +1 == map.actors[i2].x && target.y == map.actors[i2].y) { east = false };
		if (target.x - 1 == map.actors[i2].x && target.y == map.actors[i2].y) { west = false };
	};
	//check for available move tiles
	if (north == true && map.tiles[target.x][target.y - 1] != undefined) {
		go.push([target.x, target.y-1])
	};
	if (south == true && map.tiles[target.x][target.y + 1] != undefined) {
		go.push([target.x, target.y+1])
	};
	if (east == true && map.tiles[target.x +1 ][target.y] != undefined) {
		go.push([target.x +1, target.y])
	};
	if (west == true && map.tiles[target.x -1 ][target.y] != undefined) {
		go.push([target.x -1, target.y])
	};
	go.push([target.x, target.y]);
	go.push([target.x, target.y]);
	go.push([target.x, target.y]);
	//if possible go to one of those positions
	var choice = go[Math.floor(Math.random() * go.length)];
	target.x = choice[0];
	target.y = choice[1];
	//draw
	document.getElementById(map.actors[i].id).style.top = (map.actors[i].y*25 -32) +"px";
	document.getElementById(map.actors[i].id).style.left = (map.actors[i].x*40 - (map.actors[i].y*25)-6) +"px";
	document.getElementById(map.actors[i].id).style.zIndex = map.actors[i].y;
};

function still() {
	//assign to ai of actor class. Contains all wandering related ai.
};

function hunt() {
	//assign to ai of actor class. Contains all wandering related ai.
};

function examine(i) {
	document.getElementById("output").innerHTML = map.actors[i].desc + "</br> </br>";
};


function npcClick(index) {
		//check to see if it qualifies for viewing.
		var target = map.actors[index];
		if (pc.x + pc.vision < target.x || pc.x - pc.vision > target.x) {
			return
		} else if (pc.y + pc.vision < target.y || pc.y - pc.vision > target.y) {
			return
		} else {
			//if it does run a switch statement with the NPC given value
			var type = target.click;
			switch (type) {
				case "standard":
					pc.target = target.id;
					document.getElementById("targetMenu").innerHTML = "";
					//if it does update what can be seen.
					if (target.name != null) {
						document.getElementById("speaker").innerHTML = this.name;
					};
					if (target.desc != null) {
						document.getElementById("targetMenu").innerHTML += '<div class="targetButton" onclick="examine('+target.id+')"> Examine </div>';
					};
					if (target.talk != null) {
						//get name of target talk function
						document.getElementById("targetMenu").innerHTML += '<div id="talkButton" class="targetButton" onclick="scene('+target.talk+')"> Talk </div>';
					};
					if (target.use != null) {
						//create use button
					};
					document.getElementById("targetMenu").innerHTML += '<div class = "targetButton" onclick="clearTarget()">Clear</div>';

					if (target.pic != null) {
						document.getElementById("curtainCon").innerHTML += "<div id='"+target.name+"' class='actorImg' style='z-index: 109; top: 20px; left: 930px; size: relateive;'><img src='"+target.pic+"'></div>";
					};
				break;
			//need on more for combat
		}
	}
}
