//maps

function testmap() {
	//set target to main map
	map.zone = "city";
	map.actors = [];
	map.actors.push(Frederick);
	map.triggers = [];
	clearMap();
	// declare each color tile (contain this within an independent function in the future)
	var blue = [[50,50], [50,51],[50,52], [51,50], [49, 50],[51,49],[51, 51],[49,49],[49,50],[49,51],[49,52],[49,48],[48,48],[48,49],[48,50],[48,51],[48,51],[50,49],[50,48],[51,48]];
	assignTile(blue, "rgb(63,146,191)")
	// old for (i = 0; i < blue.length; i++) { map.tiles[blue[i][0]][blue[i][1]] = new tile("rgb(63, 146, 191)") };
}




function assignTile(coords, color) {
	for (i = 0; i < coords.length; i++) {
		map.tiles[coords[i][0]][coords[i][1]] = new tile(color)
	}
};

//tile class
function tile(color) {
	this.real = true;
	this.color = color;
};
