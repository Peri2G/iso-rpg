//stuff on screen should be clickable
//super simple sprite work on the scene
//drawn artwork for the VN stuff
//Have it set so that the actors buffer is sorted every time a map is loaded.

//save map as JSON. parse saved map. sort the actors array. Find difference in time. Run that many ticks. load pc.

//add checks to talk and attack to make sure within appropriate range.

//change the way sprite display from background to image.
var con = "";
var line = "";
var map = {
	zone: "", //change this to be name of object, so you can save the entire world every time you save.
	actors: [],
	load: [],
	triggers: [],
	tiles: [],
}
var pc = {
	target: null,
	sprite: {
		body: 'url("assets/pc/sprite.png")',
		hair: "",
		clothes: "",
	},
	move: true,
	x: 50,
	y: 50,
	skills: [],
	perks: [],
	inv: [],
	vision: 2,
	voice: "",
	name: "Joe",
	stats: {
		b: 75,
		m: 75,
		s: 75,
		bAtk: 25,
		mAtk: 25,
		sAtk: 25,
		bDef: 25,
		mDef: 25,
		sDef: 25,
		En: 75,
	},
	//this is essentially resistance to attack in each area. it is the culmination of all skills as passive effect.
	constitution: 0,
	endurance: 0,
	libedo: 0,
	body: {
		all: null,
		lower: {
			all: null,
			skin: null,
			toes: null,
			feet: null,
			legs: null,
			mark: []
		},
		middle: {
			all: null,
			skin: null,
			fingers: null,
			hands: null,
			arms: null,
			marks: []
		},
		torso: {
			wings: null,
			tail: null,
			butt: null,
			skin: null,
			waist: null,
			groin: null,
			chest: null,
			marks: []
		},
		head: {
			hairBack: null,
			shape: null,
			skin: null,
			ears: null,
			hairMiddle: null,
			eyes: null,
			brow: null,
			nose: null,
			mouth: null,
			hairBangs: null,
			marks: []
		},
	},
	equipped: {
		socks: null,
		shoes: null,
		bootcuffs: null,
		briefs: null,
		pants: null,
		bra: null,
		undershirt: null,
		top: null,
		sleeves: null,
		gloves: null,
		overcoat: null,
		rearcoat: null,
		hat: null,
		belt: null,
		scarf: null,
		//jewelry
		earrings: null,
		necklace: null,
		bracelet: null,
		anklets: null,
		ringLeft: null,
		ringRight: null,
		face: null,
		eyes: null,
	},
};

function start() {
	//draw background
	//draw items
	//draw actors (pc first)
	//draw menus
};

function tick() {
	//update map
	updateMap();
	//clear target if threshold exceeded.
	if (pc.target !== null) {
		if (pc.x + pc.vision < map.actors[pc.target].x || pc.x - pc.vision > map.actors[pc.target].x) {
			document.getElementById("targetMenu").innerHTML = "";
			document.getElementById("speaker").innerHTML = "";
			pc.target = null;
		} else if (pc.y + pc.vision < map.actors[pc.target].y || pc.y - pc.vision > map.actors[pc.target].y) {
			document.getElementById("targetMenu").innerHTML = "";
			document.getElementById("speaker").innerHTML = "";
			pc.target = null;
		}
	};
	//execute perks
	//check for triggers stop with return if a trigger is met maybe...
	//modify pc stats
	//draw modified stats
	pcUpdate();
	//modify world state
	//log pc location for debug reasons.
	console.log(pc.x + "." + pc.y + " & ")
};

function clearTarget() {
	document.getElementById("targetMenu").innerHTML = "";
	document.getElementById("curtainCon").innerHTML = "";
	pc.target = null;
};

function pcUpdate() {
	//update health stats
	document.getElementById("body").style.width = pc.stats.b + "%";
	document.getElementById("mind").style.width = pc.stats.m + "%";
	document.getElementById("spirit").style.width = pc.stats.s + "%";
	//update atk stats
	document.getElementById("batk").style.width = pc.stats.bAtk*1.35 + "px";
	document.getElementById("matk").style.width = pc.stats.mAtk*1.35 + "px";
	document.getElementById("satk").style.width = pc.stats.sAtk*1.35 + "px";
	//update def stats
	document.getElementById("bdef").style.width = pc.stats.bDef*1.35 + "px";
	document.getElementById("mdef").style.width = pc.stats.mDef*1.35 + "px";
	document.getElementById("sdef").style.width = pc.stats.sDef*1.35 + "px";
	//update energy
	document.getElementById("energyL").style.width = pc.stats.En / 2 + "%";
	document.getElementById("energyR").style.width = pc.stats.En / 2 + "%";
};
