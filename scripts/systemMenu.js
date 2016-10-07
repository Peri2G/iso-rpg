function sysCall() {
	//clear existing menu
	menuClose()
	//define menu content
	var menuContent = "<div id='exit' onClick='menuClose()'>Close Menu</div> <div id='dataScreen'></div><div id='systemSetting'></div>";
	//check for walk == true
	if (pc.move == true) {
		document.getElementById("menuCurtainCon").innerHTML = "<div id='curtain'></div>";
		document.getElementById("board").innerHTML += "<div id='menu' style='overflow: scroll;'></div>";
		pc.move = false;
	};
	//add system menu content
	document.getElementById("menu").innerHTML = menuContent;
	dataScreen = document.getElementById("dataScreen");
	var top = 0;
	var saveID = "";
	var loadID = "";
	var dataID = "";
	var index = 0;
	for (var i=0; i<15; i++) {
		top = i*30 +4;
		saveID = "save" + i;
		loadID = "load" + i;
		dataID = "data" + i;
		index = i;
		dataScreen.innerHTML += "<div id='"+saveID+"' class='saveButton' style='top: "+top+"px'>Save</div>  <div id='"+dataID+"'  class='dataButton'  style='top: "+top+"px'>File "+ i + "//"+ pc.name+  "//" + "Save Date and Time"+ "</div>  <div id='"+loadID+"' class='loadButton'  style='top: "+top+"px'>Load</div>"

		console.log(index);
	};

	/*
	seems to be broken, give it a shot in the future.

	for (var i = 0; i < 15; i++) {
		saveLoadEL(i);
  };
	function saveLoadEL(i) {
				var saveID  = "save"+i;
				var loadID  = "load"+i;

				document.getElementById(saveID).addEventListener("click", function() { dataSave(i); }, false );
				document.getElementById(loadID).addEventListener("click", function() { dataLoad(i); }, false );
	}*/

	document.getElementById("save0").addEventListener("click", function() { dataSave(0); }, false );
	document.getElementById("load0").addEventListener("click", function() { dataLoad(0); }, false );

	document.getElementById("save1").addEventListener("click", function() { dataSave(1); }, false );
	document.getElementById("load1").addEventListener("click", function() { dataLoad(1); }, false );

	document.getElementById("save2").addEventListener("click", function() { dataSave(2); }, false );
	document.getElementById("load2").addEventListener("click", function() { dataLoad(2); }, false );

	document.getElementById("save3").addEventListener("click", function() { dataSave(3); }, false );
	document.getElementById("load3").addEventListener("click", function() { dataLoad(3); }, false );

	document.getElementById("save4").addEventListener("click", function() { dataSave(4); }, false );
	document.getElementById("load4").addEventListener("click", function() { dataLoad(4); }, false );

	document.getElementById("save5").addEventListener("click", function() { dataSave(5); }, false );
	document.getElementById("load5").addEventListener("click", function() { dataLoad(5); }, false );

	document.getElementById("save6").addEventListener("click", function() { dataSave(6); }, false );
	document.getElementById("load6").addEventListener("click", function() { dataLoad(6); }, false );

	document.getElementById("save7").addEventListener("click", function() { dataSave(7); }, false );
	document.getElementById("load7").addEventListener("click", function() { dataLoad(7); }, false );

	document.getElementById("save8").addEventListener("click", function() { dataSave(8); }, false );
	document.getElementById("load8").addEventListener("click", function() { dataLoad(8); }, false );

	document.getElementById("save9").addEventListener("click", function() { dataSave(9); }, false );
	document.getElementById("load9").addEventListener("click", function() { dataLoad(9); }, false );

	document.getElementById("save10").addEventListener("click", function() { dataSave(10); }, false );
	document.getElementById("load10").addEventListener("click", function() { dataLoad(10); }, false );

	document.getElementById("save11").addEventListener("click", function() { dataSave(11); }, false );
	document.getElementById("load11").addEventListener("click", function() { dataLoad(11); }, false );

	document.getElementById("save12").addEventListener("click", function() { dataSave(12); }, false );
	document.getElementById("load12").addEventListener("click", function() { dataLoad(12); }, false );

	document.getElementById("save13").addEventListener("click", function() { dataSave(13); }, false );
	document.getElementById("load13").addEventListener("click", function() { dataLoad(13); }, false );

	document.getElementById("save14").addEventListener("click", function() { dataSave(14); }, false );
	document.getElementById("load14").addEventListener("click", function() { dataLoad(14); }, false );

	var settings = document.getElementById("systemSetting");

	settings.innerHTML += "<div id='fullscreen'>Toggle Fullscreen</div>";
	document.getElementById("fullscreen").addEventListener("click", toggleFullScreen );
	//add appropriate event listeners,

	//every item will display its stats and description in the output menu
};
function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.body.requestFullscreen) {
      document.body.requestFullscreen();
    } else if (document.body.msRequestFullscreen) {
      document.body.msRequestFullscreen();
    } else if (document.body.mozRequestFullScreen) {
      document.body.mozRequestFullScreen();
    } else if (document.body.webkitRequestFullscreen) {
      document.body.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
};
