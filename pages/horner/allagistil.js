var oldWidth;
var oldHeight;
var box ;
var y;
koutakiaIsOk = false;
var isOpen = false;

var apotSize = function() {
	
	box = document.getElementById("telLisi");	
	oldWidth = box.clientWidth;
	oldHeight = box.clientHeight;	
	var newWidth = oldWidth + 200;
	var newHeight = box.clientHeight + 5;
	
	
	box.style.width = newWidth + "px";
	box.style.height = newHeight + "px";
	box.style.lineHeight = oldHeight + "px";
	
}

var apotResetSize = function() {
	box = document.getElementById("telLisi");	
	box.style.width = oldWidth + "px";
	box.style.height = oldHeight + "px";
	box.style.lineHeight = "";
}

var notFilled = function(t) {
	document.getElementById("oros" + t).style.backgroundColor = "#FFC6B8";
	lathos();
	document.getElementById("outp").innerHTML = "Υπάρχει λάθος είσοδος.";
}

var isFilled = function(t) {
	document.getElementById("oros" + t).style.backgroundColor = "#FFFFFF";
}

var filled = function() {

	var epanal = document.getElementById("num").value;
	isBoxOk = true;
	
	for (var t=epanal; t>=0; t--) {
		var kouti = document.getElementById("oros" + t).value;
		
		if (isNaN(Number(kouti))) { console.log("Not a number" + t); notFilled(t); isBoxOk = false;}
		else if ( (t == 0) && (kouti == 0) ) { notFilled(t); isBoxOk = false;  }
		else if (kouti === "") { console.log("empty" + t);  kouti = "0";  isFilled(t); /*notFilled(t); isBoxOk = false; */}
		else { isFilled(t) }
	}
	
	console.log(isBoxOk);
}

var isFilledM = function() {
	var megist = document.getElementById("num").value;
	var megistS = document.getElementById("num").style;
	
	if ( (isNaN(Number(megist))) || Number(megist) == 0) {
		megistS.backgroundColor = "#FFC6B8";
		koutakiaIsOk = false;
		document.getElementById("output").innerHTML = "Λάθος είσοδος.";
		document.getElementById("output").innerHTML += "Ο Μεγιστοβάθμιος όρος δεν ορίζεται σωστά.";
	} else {
		megistS.backgroundColor = "#FFFFFF";
		koutakiaIsOk = true;
	}
}

var epikinoniaAnigma = function() {
	var fTd = document.getElementById("epikinonia");
	var sTd = document.getElementById("sEpikinonia");
	var imgF = document.getElementById("imgTdSF");
	var imgG = document.getElementById("imgTdSG");
	/*
	fTd.style.width = "90px";
	fTd.style.height = "80px";
	*/
	imgF.style.visibility = "visible";
	imgG.style.visibility = "visible";
	isOpen = true;
	
	
}

var epikinoniaKlisimo = function() {
	var fTd = document.getElementById("epikinonia");
	var sTd = document.getElementById("sEpikinonia");
	var imgF = document.getElementById("imgTdSF");
	var imgG = document.getElementById("imgTdSG");
	
	imgF.style.visibility = "hidden";
	imgG.style.visibility = "hidden";
	/*
	imgF.removeAttribute("width");
	imgG.removeAttribute("height");
	*/
	isOpen = false;
}

var epikinonia = function() {

	if (isOpen == false) { epikinoniaAnigma(); } 
	else { epikinoniaKlisimo();	}

}

var infoExpand = function() {
		
	var divInfo = document.getElementById("divInfo");
	var txtInfo = document.createTextNode('Για ευκολότερη χρήση, χρησιμοποιήστε το πλήκτρο "Tab" για την πλοήγηση μεταξύ των πεδίων.');
	
	divInfo.style.width = "250px";
	divInfo.style.border =  "2px solid grey";
	divInfo.style.backgroundColor = "gray";
	
	divInfo.appendChild(txtInfo);	
}

var infoHide = function() {
	
	var divInfo = document.getElementById("divInfo");
	
	divInfo.style.width = "0px";
	divInfo.style.border =  "0px solid grey";
	divInfo.style.backgroundColor = "transparent";
	divInfo.innerHTML = "";
}




