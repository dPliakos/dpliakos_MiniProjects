

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

function listOptions(select, options) {
//	list = document.getElementById("option_list");
	list = select;
	list.innerHTML = "";
	list.appendChild(createlistOption("From: "));
	for (i in options)
		if (options[i] instanceof NumericalSystem) 
			list.appendChild(createlistOption(options[i].name, options[i].alias));
}

function createInput(type, className, txtToShow) {
	if (type == "button") {
		var btn = document.createElement("input");
		btn.setAttribute("type", "button");
		btn.setAttribute("class", className);
		btn.setAttribute("value", txtToShow);
		return btn;
	} // else
	var txt = document.createElement("input");
	txt.setAttribute("type", "text");
	txt.setAttribute("class", className);
	txt.setAttribute("placeholder", txtToShow);
	return txt;
}

function addConvertElements(possibleOrigins) {
	var panel = document.getElementById("menu_panel");
//	panel.setAttribute("class", "menu-panel");
	panel.innerHTML = "";
	var select = document.createElement("select");
	select.setAttribute("class", "options");
	listOptions(select, possibleOrigins);
	panel.appendChild(select);
	panel.appendChild(createInput("text", "number_input", "Write the number"));
	panel.appendChild(createInput("button", "submit_button", "Calculate"));
}

function printConversion(from=16, to=10) {
	var panel = document.getElementById("output");
	var number = "135";
	var output = solution(from, to, number);
	panel.innerHTML = output;
}

var toBinary = {
	possibleOrigins: [decimal, octal, hexademical],
	fromDec: function(number) {
		return toBaseFromDec_int(number, 2, 'html');
	},
	fromOct: function(number) {
		return toBinFromBase_int(number, 8, 'html');
	},
	fromhex: function(number) {
		return toBinFromBase_int(number, 16, 'html');
	},
	calculate: function(from, number) {
		switch(from) {
			case 'dec': return fromDec(number);
			case 'oct': return fromOct(number);
			case 'hex': return fromHex(number);
			default console.log("__ERROR__"); 
		}
	},
	addElements: function() {
		addConvertElements(this.possibleOrigins);
	}
}

var toOctal = {
	possibleOrigins: [binary, hexademical],
	fromBin: function(number) {
		return toBaseFromBin_int(number, 8, 'html');
	},
	fromDec: function(number) {
		return toBaseFromDec_int(number, 8, 'html');
	},
	calculate: function(from, number) {
		switch(from) {
			case 'bin': return fromBin(number);
			case 'dec': return fromDec(number);
			default: console.log("__ERROR__");
		}
	}
	addElements: function() {
		addConvertElements(this.possibleOrigins);
	}
}

var toDecimal = {
	possibleOrigins: [binary, octal, hexademical],
	fromBin: function(number) {
		return toDecimalFromBase_int(number, 2, 'html');
	},
	fromOct: function(number) {
		return toDecimalFromBase_int(numner, 8, 'html');
	},
	fromHex: function(number) {
		return toDecimalFromBase_int(number, 16, 'html');
	},
	calculate: function(from, number) {
		switch(from) {
			case 'bin': return fromBin(numner);
			case 'oct': return fromOct(number);
			case 'hex': return fromHex(number);
			default: console.log("__ERROR__");
		}
	},
	addElements: function() {
		addConvertElements(this.possibleOrigins); 
	}
}

var toHex = {
	possibleOrigins: [binary, decimal],
	fromBin: function(number) {
		return toBaseFromBin_int(number, 16, 'html');
	},
	fromDec: function(number) {
		return toBaseFromDec_int(numebr, 16, 'html');
	},
	calculate: function(from, number) {
		switch(from) {
			case 'bin': return fromBin(number);
			case 'dec': return fromDec(number);
			default: console.log("__ERROR__");
		}
	},
	addElements: function() {
		addConvertElements(this.possibleOrigins);
	}
}

