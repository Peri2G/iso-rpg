function equipable(name, type, desc, value, img, b, m, s, bAtk, mAtk, sAtk, bDef, mDef, sDef) {
	this.name = name;
	this.equipable = true;
	this.type = type;
	this.desc = desc;
	this.value = value;
	this.img = img;
	//have equip and unequip be built in
	//effects are made manully
	this.effect = function() {return true};
	this.uneffect = function() {return true};
	this.stats = {
		b: b,
		m: m,
		s: s,
		bAtk: bAtk,
		mAtk: mAtk,
		sAtk: sAtk,
		bDef: bDef,
		mDef: mDef,
		sDef: sDef,
	};
};

function consume(name, desc, value, img) {
	this.name = name;
	this.equipable = false;
	this.type = "consumeable";
	this.desc = desc;
	this.value = value;
	this.img = img;
	//will have to create custom methods for these. 
	this.use = function(){console.log("success")};
};

function book(name, type, desc, value, img) {
	this.name = name;
	this.equipable = false;
	this.type = "book";
	this.desc = desc;
	this.value = value;
	this.img = img;
	//will have to create custom methods for these. 
	this.read = function(){console.log("success")};
};

function key(name, type, desc, value, img) {
	this.name = name;
	this.equipable = false;
	this.type = "key";
	this.desc = desc;
	this.value = value;
	this.img = img;
};