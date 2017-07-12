// @license magnet:?xt=urn:btih:5305d91886084f776adcf57509a648432709a7c7&dn=x11.txt
﻿var oroi = [];
var dieretes = [];
var polyon = [];
var xs = [];
var times;
var a;
var aneresi;
var sinexia;
var x;
var isBoxOk;
var tbIndex;

var prosthiki = function() {
var out = document.getElementById("output");
times = document.getElementById("num").value;
tbIndex = 2;

out.innerHTML = "<form name='lala' id='myForm'>";
var form = document.getElementById("myForm");


if (times > 15) {
//	alert("Ο αριθμός είναι πολύ μεγάλος");
	document.getElementById("output").innerHTML = "Ο Μεγιστοβάθμιος όρος είναι πολύ μεγάλος.";
	reurn;
}

for (var i=times; i>=0; i--) {
	var addText = document.createElement("input");
	addText.setAttribute("id", "oros"+i);
	tbIndex = tbIndex + 1;
	addText.setAttribute("tabIndex", tbIndex);
	form.appendChild(addText);

	if ((i != 0) && (i != 1)) {
	form.innerHTML += "x<sup>" + i + "</sup>" + "    ";
	} else if (i == 1) {
		form.innerHTML += "x  ";
	}
}

	var adDiv = document.createElement("div");
	adDiv.setAttribute("id", "outp");
	document.getElementById("output").appendChild(adDiv);

}

var addTabIndex = function() {
	tbIndex = tbIndex + 1;

	document.getElementById("btnComp").setAttribute("tabindex", tbIndex);
}

var diaxorismos = function() {

	oroi = [];
	var times = document.getElementById("num").value;
	for (var i=times; i>=0; i--) {
		oroi.push(Number (document.getElementById("oros" + i).value));
	}
//console.log(oroi);

}

var findA = function() {

	dieretes = [];
	var c = document.getElementById("oros0").value;
	c = Math.abs(c);

	for (var i=0; i<=c; i++) {
		if (c % i == 0) { dieretes.push(i); dieretes.push(i * (-1) ); }
	}
//	console.log("dieretes = " + dieretes);
}

var findD = function() {

	x = 0;
	var i = 0;
	var found = false;
	var epanalipsi = dieretes.length;

var dokimi = function(a) {
		x = 0;
		i = 0;
	do {
		x = x + oroi[i];
		x = x * a;
		i++;
//		console.log("oroi[" + i + "] = " + oroi[i]);
//		console.log(" x = " + x);
//		console.log("i = " + i);
		} while(i < times);
		x = x + oroi[times];

		if (x == 0) {
			found = true;
//			return console.log("TRUE");
		}

	}

for (var cnt=0; cnt<epanalipsi; cnt++) {
	a = dieretes[cnt];
	dokimi(a);
	if (found) {  console.log("a = ", a); return;}

}
}

var elegxos = function() {
	if (x != 0) {  sinexia = false;}
	else { sinexia = true;}
	console.log("x = " + x);
}

var adDivs = function() {

	var child  = document.getElementById("telLisi");
	if (child != null) {
	var parent = document.getElementById("output");
	parent.removeChild(child);
	}

	var adDivb = document.createElement("div");
	adDivb.setAttribute("id", "telLisi");
	document.getElementById("output").appendChild(adDivb);
}

var lisi = function() {
		p = a;
		x = 0;
		i = 0;
		xs=[];
		polyon =[];
	do {
		x = x + oroi[i];
		polyon.push (x);
		x = x * p;
		xs.push(x);
		i++;
//		console.log("oroi[" + i + "] = " + oroi[i]);
//		console.log(" x = " + x);
//		console.log("i = " + i);
		} while(i < times);
		x = x + oroi[times];
}

var pinakas = function() {

	var plithos = oroi.length;
	var grammi1 = document.getElementById("grami1");
	var otpt = document.getElementById("outp");
	document.getElementById("outp").innerHTML = "";



	var dimiourgia = function() {
//		otpt.innerHTML += "<br><br>";
		otpt.innerHTML += "<hr width='300px'>";

		var adTbl = document.createElement("table");
		adTbl.setAttribute("class", "tblLisi");
		adTbl.setAttribute("id", "tblLisi");
		adTbl.setAttribute("border", "0");
		adTbl.setAttribute("cellspacing", "10px");
		otpt.appendChild(adTbl);
//		console.log(adTbl);

		var tbl = document.getElementById("tblLisi");

		for (var v=0; v<3; v++) {
			var adTr = document.createElement("tr");
//			var txtNode = document.createTextNode("test");
			adTr.setAttribute("id", "grami" + v);
			tbl.appendChild(adTr);
//			document.getElementById("grami" + v).appendChild(txtNode);
		}
	}

	var kena0 = function() {
		for (var k=0; k<plithos; k++) {
			var adTd = document.createElement("td");
			adTd.setAttribute("id", "gram0keli" + k);
			document.getElementById("grami0").appendChild(adTd);
			var txtNode = (document.createTextNode(oroi[k]));
			document.getElementById("gram0keli" + k).appendChild(txtNode);
		}
		var adTd = document.createElement("td");
		adTd.setAttribute("id", "gram0keli" + plithos);
		document.getElementById("grami0").appendChild(adTd);
		var txtNode = document.createTextNode(a);
		document.getElementById("gram0keli" + plithos).appendChild(txtNode);

	}


	var kena1 = function() {

		var adTd = document.createElement("td");
		adTd.setAttribute("id", "gram1keli0");
		document.getElementById("grami1").appendChild(adTd);
		var txtNode = document.createTextNode("");
		document.getElementById("gram1keli0").appendChild(txtNode);

		for (var q=0; q<(plithos-1); q++) {
			var adTd = document.createElement("td");
			adTd.setAttribute("id", "gram1keli" + (q+1));
			document.getElementById("grami1").appendChild(adTd);
			var txtNode = (document.createTextNode(xs[q]));
			document.getElementById("gram1keli" + (q+1)).appendChild(txtNode);
		}
	}

	var kena2 = function() {
		for (var w=0; w<(plithos -1 ); w++) {
			var adTd = document.createElement("td");
			adTd.setAttribute("id", "gram2keli" + w);
			document.getElementById("grami2").appendChild(adTd);
			var txtNode = (document.createTextNode(polyon[w]));
			document.getElementById("gram2keli" + w).appendChild(txtNode);
		}
	var adTd = document.createElement("td");
	adTd.setAttribute("id", "gram2keli" + plithos);
	document.getElementById("grami2").appendChild(adTd);
	var txtNode = document.createTextNode("0");
	document.getElementById("gram2keli" + (plithos)).appendChild(txtNode);

	}

	var tblStyle = function() {
		document.getElementById("gram0keli" + (plithos-1)).style.borderRight = "3px double white";
		document.getElementById("gram1keli" + (plithos-1)).style.borderRight = "3px double white";
		document.getElementById("gram2keli" + (plithos)).style.borderRight = "3px double white";
	}



dimiourgia();
kena0();
kena1();
kena2();
tblStyle();

}

var koutakia = function() {
	var oroi = [];
	var dieretes = [];
	var polyon = [];
	var xs = [];
	var times = 0;
	var a = 0;
	koutakiaIsOk = false;

	isFilledM();
	if (koutakiaIsOk) {
	document.getElementById("output").innerHTML = "";
	var otpt = document.getElementById("output");
	otpt.innerHTML = "";
	prosthiki();
	}
}

var apotelesma = function() {
	var fores = xs.length;
	var divLisi = document.getElementById("telLisi");
	var adSpan = document.createElement("span");
	adSpan.setAttribute("id", "spanLisi");
	adSpan.setAttribute("class", "spanLisi");
	var out = document.getElementById("spanLisi");
	divLisi.appendChild(adSpan);
	var out = document.getElementById("spanLisi");
	var r = fores - 1;

	if (a > 0) { out.innerHTML = "(x - " + a + ") (";}
	else if (a < 0) { out.innerHTML = "(x + " + Math.abs(a) + ")(";}

	for (var e=0; e<fores; e++) {
		if ((e == 0) && (polyon[e] == 1)) { out.innerHTML += "";  }
		else if ((e == 0) && (polyon[e] != 1)) {out.innerHTML += polyon[e];}

		else if ((e == (fores-1)) && (polyon[e] > 0  )) {out.innerHTML += " + " + polyon[e];}
		else if ((e == (fores-1)) && (polyon[e] <  0 )) {out.innerHTML += " - " + polyon[e];}
		else if ((e == (fores-1)) && (polyon[e] == 0 )) {out.innerHTML += "";}

		else if ((polyon[e] >= 0) && (polyon[e] !=  1)) {out.innerHTML+= " + " + polyon[e]; }
		else if ((polyon[e] >= 0) && (polyon[e] ==  1)) {out.innerHTML += " + ";}

		else if ((polyon[e] <  0) && (polyon[e] != -1)) {out.innerHTML += " - " + Math.abs(polyon[e]);}
		else if ((polyon[e] <  0) && (polyon[e] == -1)) {out.innerHTML += " - ";}


		if  ((r != 1) && (r != 0)) { out.innerHTML += "x" + "<sup>" + r + "</sup>";}
		else if (r == 1) { out.innerHTML += "x"; }
		r--;
	}
	out.innerHTML += ")";
	document.getElementById("outp").innerHTML += "<br>"
//	document.getElementById("divLisi").innerHTML += "<br> <br>";

}

var lathos = function() {
	var parent = document.getElementById("output");
	var child  = document.getElementById("telLisi");

	document.getElementById("outp").innerHTML += "<br><br>";
	document.getElementById("outp").innerHTML = "Η πράξη δεν μπορεί  να γίνει";
	if (child != null) {
	document.getElementById("telLisi").innerHTML = "";
	parent.removeChild(child);
	}


}

var undo = function() {
	document.getElementById("output").innerHTML = aneresi;
}

var teliko = function() {
	filled();

if (isBoxOk) {
	sinexia = false;
	diaxorismos();
	findA();
	findD();
	elegxos();
	if (sinexia == true) {
	adDivs();
	lisi();
	pinakas();
	apotelesma();
	apotResetSize();
	apotSize();
	aneresi = document.getElementById("output").innerHTML;
	console.log("sinexia, teliko  = " + sinexia);
	}
	else {
		lathos();
	}

}


}

// @license-end
