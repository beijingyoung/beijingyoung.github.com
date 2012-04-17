if (document.forms[0].elements) {
	for (i = 0; i < document.forms[0].elements.length; i++) {
		document.forms[0].elements[i].onclick = function() {
			var e = targetelement();
			e.focus();
			e.select();
		};
	}
}


document.onkeyup = keyup;
function clearactive() {
	var e = document.getElementById("backtop");
	if (e) { e.className = ""; }
	e = document.getElementById("backhome");
	if (e) { e.className = ""; }
	e = document.getElementById("previtem");
	if (e) { e.className = ""; }
	e = document.getElementById("nextitem");
	if (e) { e.className = ""; }
}


function keyup(e) {
	
	var kid = (window.event) ? event.keyCode : e.keyCode;
	var nid = "";
	
	switch(kid) {
		
		case 38:
		case 84:
		nid = "backtop";
		break;
		
		case 72:
		nid = "backhome";
		break;
		
		case 37:
		case 80:
		nid = "previtem";
		break;
		
		case 39:
		case 78:
		nid = "nextitem";
		break;
	}
	
	if (nid != "") {
		ne = document.getElementById(nid);
		if (ne) {
			ne.className = "active";
			doevent(ne, "click");
			window.onunload = clearactive;
		}
	}
	
}


function doevent(el, evt) {
	if (evt=="click" && el.tagName=='A') {
		window.location = el.href;
		return true;
	}
	if (document.createEvent) {
		var eo = document.createEvent("HTMLEvents");
		eo.initEvent(evt, true, true);
		return !el.dispatchEvent(eo);
	} 
	else if (document.createEventObject) {
		return el.fireEvent("on"+evt);
	}
}