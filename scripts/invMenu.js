function listingElem() {
	if (pc.inv[i].equipable == true) {
		if (pc.equipped[pc.inv[i].type] == pc.inv[i]) {
			return "<div id='item"+i+"' class='listing' onclick='listingClick("+i+")' onMouseOver='itemInfo("+i+") ' style='	background-color: rgba(50,50,50,.25);'><div class='itemName'>"+pc.inv[i].name+"</div> <div class= 'itemValue'>"+pc.inv[i].value+"</div> "+pc.inv[i].type+" </div>"
		} else {
			return "<div id='item"+i+"' class='listing' onclick='listingClick("+i+")' onMouseOver='itemInfo("+i+") '><div class='itemName'>"+pc.inv[i].name+"</div> <div class= 'itemValue'>"+pc.inv[i].value+"</div> "+pc.inv[i].type+" </div>"
		}
	} else {
		return "<div id='item"+i+"' class='listing' onclick='listingClick("+i+")' onMouseOver='itemInfo("+i+") '><div class='itemName'>"+pc.inv[i].name+"</div> <div class= 'itemValue'>"+pc.inv[i].value+"</div> "+pc.inv[i].type+" </div>"
	}
};

function invCall() {
	//clear existing menu
	menuClose()
	//define menu content
	var menuContent = "<div id='exit' onClick='menuClose()'>Close Menu</div> <div id='filters'></div> <div id='listings'></div> <div id='itemImg'></div> <div id='itemStats'></div>";
	//check for walk to confirm pc is not occupied with somethign else
	if (pc.move == true) {
		document.getElementById("menuCurtainCon").innerHTML = "<div id='curtain'></div>";
		document.getElementById("board").innerHTML += "<div id='menu'></div>";
		document.getElementById("menu").innerHTML = menuContent;
		pc.move = false;

		//display display listings
		var listings = document.getElementById("listings");
		for (i = 0; i < pc.inv.length; i++) {
			listings.innerHTML += listingElem()
			//need to add on mouseover event to change the status update.
		};
		//every item will display its stats and description in the output menu
		var filters = document.getElementById("filters");
		filters.innerHTML = "<div id='all' class='filter'>All</div><div id='tops' class='filter'>Tops</div><div id='bottoms' class='filter'>Bottoms</div><div id='underclothes' class='filter'>Underclothes</div><div id='feet' class='filter'>Feet</div>	<div id='accessories' class='filter'>Accessories</div><div id='jewelry' class='filter'>Jewelry</div>	<div id='consumables' class='filter'>Consumables</div>	<div id='books' class='filter'>Books</div>	<div id='keys' class='filter'>Keys</div>";
		//add appropriate event listeners,
		document.getElementById("all").addEventListener("click", function(){invCall()});
		document.getElementById("tops").addEventListener("click", function(){invListings("tops")});
		document.getElementById("bottoms").addEventListener("click", function(){invListings("bottoms")});
		document.getElementById("accessories").addEventListener("click", function(){invListings("accessories")});
		document.getElementById("jewelry").addEventListener("click", function(){invListings("jewelry")});
		document.getElementById("consumables").addEventListener("click", function(){invListings("consumables")});
		document.getElementById("books").addEventListener("click", function(){invListings("books")});
		document.getElementById("keys").addEventListener("click", function(){invListings("keys")});
	};
};

function invListings(filter) {
	//the content to be passed on
	var listings = "";
	var filter = filter;
	//the filter array to check for display. (each button refers to multiple item slots)
	var pass = [null, null, null, null, null, null, null, null, null, null];
	//establish filter as array of all things that can be selected in a single filter, to be used for if statement
	if (filter == "tops") {
		//top sleeves overcoat
		console.log("success");
		pass[0] = "top";
		pass[1] = "sleeves";
		pass[2] = "overcoat";
	};
	if (filter == "bottoms") {
		//pants belt
		pass[0] = "pants";
		pass[1] = "belt";
	};
	if (filter == "underclothes") {
		//briefs pants bra undershirt
		pass[0] = "briefs";
		pass[1] = "pants";
		pass[2] = "bra";
		pass[3] = "undershirt";
	};
	if (filter == "feet") {
		//shoes socks cuffs
		pass[0] = "shoes";
		pass[1] = "socks";
		pass[2] = "cuffs";
	};
	if (filter == "accessories") {
		//gloves scarf hat gloves
		pass[0] = "gloves";
		pass[1] = "scarf";
		pass[2] = "hat";
		pass[3] = "gloves";
	};
	if (filter == "jewelry") {
		//earrings, necklace bracelet anklets ringLeft ring Right Face Eyes
		pass[0] = "earrings";
		pass[1] = "necklace";
		pass[2] = "bracelet";
		pass[3] = "anklets";
		pass[4] = "ringLeft";
		pass[5] = "ringRight";
		pass[6] = "Face";
		pass[7] = "Eyes";
	};
	if (filter == "consumable") {
		pass[0] = "consumable";
	};
	if (filter == "books") {
		pass[0] = "books";
	};
	if (filter == "keys") {
		pass[0] = "keys";
	};
	//will have to sort the inventory first.

	//have if statements refering to argument to determine which items to display
	for (i = 0; i < pc.inv.length; i++) {
		//check for inv
		var check = pc.inv[i].type;
		if (check == pass[0] || check ==pass[1] || check ==pass[2] || check ==pass[3] || check ==pass[4] || check ==pass[5] || check ==pass[6] || check ==pass[7] || check ==pass[8] || check ==pass[9]) {
			listings += listingElem();
		};
	};
	document.getElementById("listings").innerHTML = listings;
}

function menuClose() {
	var el = document.getElementById("menu");
	if (el !== null) {
		document.getElementById("menuCurtainCon").innerHTML = "";
		el.parentNode.removeChild(el);
		pc.move = true;
	};
	document.getElementById("output").innerHTML = "";
};


function listingClick(i){
	var target = i;
	var type = pc.inv[i].type;
	//check if it's equipable
	if (pc.inv[i].equipable == true) {
		//check if target slot is used
		if (pc.equipped[type] != null) {
			//if it is used, see if it's used by the target item
			if (pc.equipped[type] == pc.inv[i]) {
				//if they are the same unequip
				unequip(type)
			} else {
				//if they are different, unequipe target slot, then equip target item
				unequip(type)
				equip(target, type);
			}
		} else {
			//if not used then just equp
			equip(target, type)
		}
	} else {
		//if it's not equipable, just use it.
		pc.inv[i].use(target)
	};
	pcUpdate();
};

function equip(i, type){
		//try to contain the equip check in this class.
		pc.equipped[type] = pc.inv[i];

		document.getElementById("item"+i).style.backgroundColor = "rgba(50,50,50,.25)";

		pc.stats.b += pc.inv[i].stats.b;
		pc.stats.m += pc.inv[i].stats.m;
		pc.stats.s += pc.inv[i].stats.s;
		pc.stats.bAtk += pc.inv[i].stats.bAtk;
		pc.stats.mAtk += pc.inv[i].stats.mAtk;
		pc.stats.sAtk += pc.inv[i].stats.sAtk;
		pc.stats.bDef += pc.inv[i].stats.bDef;
		pc.stats.mDef += pc.inv[i].stats.mDef;
		pc.stats.sDef += pc.inv[i].stats.sDef;
};
function unequip(type){
		//try to contain the unequip check in this class
		//need to get the id of the item being unequipped. Will have to search the array for the item to be unequipped.
		if (pc.equipped[type].uneffect() == false) {
			return
		};

		i = getEquippedIndex.apply(this, arguments);

		document.getElementById("item"+i).style.backgroundColor = "rgba(50,50,50,.5)";

		pc.stats.b -= pc.equipped[type].stats.b;
		pc.stats.m -= pc.equipped[type].stats.m;
		pc.stats.s -= pc.equipped[type].stats.s;
		pc.stats.bAtk -= pc.equipped[type].stats.bAtk;
		pc.stats.mAtk -= pc.equipped[type].stats.mAtk;
		pc.stats.sAtk -= pc.equipped[type].stats.sAtk;
		pc.stats.bDef -= pc.equipped[type].stats.bDef;
		pc.stats.mDef -= pc.equipped[type].stats.mDef;
		pc.stats.sDef -= pc.equipped[type].stats.sDef;

		pc.equipped[type] = null;
};

function getEquippedIndex(type) {
	for (i=0; i<pc.inv.length; i++) {
		if (pc.equipped[type] == pc.inv[i]) {
			return i;
		}
	}
};



function itemInfo(target) {
	var highlight = pc.inv[target];
	document.getElementById("itemImg").style.backgroundImage = "url('assets/items/"+ highlight.img +"')";
	document.getElementById("itemStats").innerHTML = "<span style='font-size: 30px;'>" + highlight.name + "</span><div id='statsB'>Body: "+highlight.stats.b+"</div> <div id='statsBAtk'>BAtk: "+highlight.stats.bAtk+"</div> <div id='statsBDef'>BDef: "+highlight.stats.bDef+"</div> <div id='statsM'>Mind: "+highlight.stats.m+"</div> <div id='statsMAtk'>MAtk: "+highlight.stats.mAtk+"</div> <div id='statsMDef'>MDef: "+highlight.stats.mDef+"</div> <div id='statsS'>Spirit: "+highlight.stats.s+"</div> <div id='statsSAtk'>SAtk: "+highlight.stats.sAtk+"</div> <div id='statsSDef'>SDef: "+highlight.stats.sDef+"</div> "
	document.getElementById("output").innerHTML = highlight.desc;
};
//all, consumables, keys, quest items, misc, equipable


//drop, sell, equip, unequip. Need alert menu.
