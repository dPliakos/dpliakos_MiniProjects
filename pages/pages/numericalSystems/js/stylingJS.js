

function init() {
	console.log('welcome');
}

function calculate() {
	printConversion(8, 2);
}

function selectTab(tab) {
	addShadow(tab);
}

function addShadow(tab) {
	removeShadows();
	tab.style.zIndex = "0";
	tab.style.boxShadow = "0px 0px 2px 0px white";
}

function removeShadows() {
	var tabs = document.getElementById("navigation_options");
	for (var i=0; i<tabs.children.length; i++) {
		tab = tabs.children[i];
		tab.style.boxShadow = "none";
		tab.style.zIndex = "10"
	}
}

function createlistOption(name, value=0) {
	var option = document.createElement("option");
	option.innerHTML = name;
	option.setAttribute("value", value);
	return option;
}

function listOptions(options) {
	list = document.getElementById("option_list");
	list.innerHTML = "";
	list.appendChild(createlistOption("From: "));
	for (i in options)
		if (options[i] instanceof NumericalSystem) 
			list.appendChild(createlistOption(options[i].name, options[i].base));
}

function printConversion(from=16, to=10) {
	var panel = document.getElementById("output");
	var number = "135";
	var output = solution(from, to, number);
	panel.innerHTML = output;
}

var toBinary = {
	possibleOrigins: ["dec", "oct", "hex"],
	fromDec: function(number) {
		return toBaseFromDec_int(number, 2, 'html');
	},
	fromOct: function(number) {
		return toBinFromBase_int(number, 8, 'html');
	},
	fromhex: function(number) {
		return toBinFromBase_int(number, 16, 'html');
	},
	
}

var toOctal = {
	possibleOrigins: ["bin", "dec"],
	fromBin: function(number) {
		return toBaseFromBin_int(number, 8, 'html');
	},
	fromDec: function(number) {
		return toBaseFromDec_int(number, 8, 'html');
	}
}

var toDecimal = {
	possibleOrigins: ["bin", "oct", "hex"],
	fromBin: function(number) {
		return toDecimalFromBase_int(number, 2, 'html');
	},
	fromOct: function(number) {
		return toDecimalFromBase_int(numner, 8, 'html');
	},
	fromHex: function(number) {
		return toDecimalFromBase_int(number, 16, 'html');
	}
}

var toHex = {
	possibleOrigins: ["bin", "dec"],
	fromBin: function(number) {
		return toBaseFromBin_int(number, 16, 'html');
	},
	fromDec: function(number) {
		return toBaseFromDec_int(numebr, 16, 'html');
	}
}

