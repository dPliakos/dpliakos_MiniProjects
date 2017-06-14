
var method;

function init() {
	selectTab(document.getElementById("navigation_options").children[0], 1);
}

function calculate() {
	printConversion(8, 2);
}

function selectTab(tab, num) {

	switch(num) {
		case 1: method = toBinary;
		break;
		case 2: method = toDecimal;
		break;
		case 3: method = toOctal;
		break;
		case 4: method = toHex;
		break;
		case 5: method = sum;
		break;
		case 6: method = nullMethod;
		case 7: method = nullMethod;
		case 8: method = nullMethod;
		break;
		default: method = toDecimal;
	}
	method.addElements();
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
	list = select;
	list.innerHTML = "";
	list.appendChild(createlistOption("From: "));
	for (i in options)
		if (options[i] instanceof NumericalSystem)
			list.appendChild(createlistOption(options[i].name, options[i].alias));
}

function createInput(type, className, txtToShow, id=null, onclick=null) {
	if (type == "button") {
		var btn = document.createElement("input");
		btn.setAttribute("type", "button");
		btn.setAttribute("class", className);
		btn.setAttribute("value", txtToShow);
		if (onclick != null) btn.setAttribute("onclick", onclick);
		return btn;
	} // else
	var txt = document.createElement("input");
	txt.setAttribute("type", "text");
	txt.setAttribute("class", className);
	txt.setAttribute("placeholder", txtToShow);
	if (id != null) txt.setAttribute("id", id);
	return txt;
}

function addConvertElements(possibleOrigins) {
	var panel = document.getElementById("menu_panel");
	panel.innerHTML = "";
	if (possibleOrigins == null) {
		panel.innerHTML = "<span style='color: white'> Not supported action yet. </span>";
		return;
	}
	var select = document.createElement("select");
	select.setAttribute("class", "options");
	select.setAttribute("id", "origin");
	listOptions(select, possibleOrigins);
	panel.appendChild(select);
	panel.appendChild(createInput("text", "number_input", "Write the number", "number_in"));
	panel.appendChild(createInput("button", "submit_button", "Calculate", null, "printResult()"));
}

function addOperationElements(possibleOrigins) {
	var panel = document.getElementById("menu_panel");
	panel.innerHTML = "";
	if (possibleOrigins == null) {
		panel.innerHTML = "<span style='color: white'> Not supported action yet. </span>";
		return;
	}
	var select = document.createElement("select");
	select.setAttribute("class", "options");
	select.setAttribute("id", "origin");
	listOptions(select, possibleOrigins);
	panel.appendChild(select);
	panel.appendChild(createInput("text", "number_input", "The first number", "f_number"));
	panel.appendChild(createInput("text", "number_input", "The second number", "s_number"));
	panel.appendChild(createInput("button", "submit_button", "Calculate", null, "appendResult()"));
}

function printResult() {
	var panel = document.getElementById("output");
	var output = (method != null? method.calculate() : "Not supported action yet.")
	panel.innerHTML = output;
}

function appendResult() {
	var panel = document.getElementById("output");
	var output = (method != null? method.calculate() : "Not supported action yet.");
	panel.innerHTML = "";
	panel.appendChild(output);
}

// possibleOrigins are described at calculationsJS.js
var toBinary = {
	possibleOrigins: [decimal, octal, hexademical],
	canCopmute: false,
	fromDec: function(number) {
		return toBaseFromDec_int(number, 2, 'html');
	},
	fromOct: function(number) {
		return toBinFromBase_int(number, 8, 'html');
	},
	fromHex: function(number) {
		return toBinFromBase_int(number, 16, 'html');
	},
	takeInput: function() {
		var input = document.getElementById("number_in");
		return input.value;
	},
	checkOrigin: function() {
		var input = document.getElementById("origin").value;
		return input;
	},
	calculate: function(from) {
		var number = this.takeInput();
		var origin = this.checkOrigin();
		switch(origin) {
			case 'dec': return this.fromDec(number);
			case 'oct': return this.fromOct(number);
			case 'hex': return this.fromHex(number);
			default: console.log("__ERROR__");
		}
	},
	addElements: function() {
		addConvertElements(this.possibleOrigins);
	},
	showError: function() {
		// show error panel.
		var panel = document.getElementById("menu_panel");
		var error = dcument.createElement("div");
		error.setAttribute('class', 'errorMessage visible');
		error.innerHTML = "There is a non valid character";
	},
	hideError: function() {
		// hide error panel.
	}
}

var toOctal = {
	possibleOrigins: [binary, decimal],
	fromBin: function(number) {
		return toBaseFromBin_int(number, 8, 'html');
	},
	fromDec: function(number) {
		return toBaseFromDec_int(number, 8, 'html');
	},
	takeInput: function() {
		var input = document.getElementById("number_in");
		return input.value;
	},
	checkOrigin: function() {
		var input = document.getElementById("origin").value;
		return input;
	},
	calculate: function(from, number) {
		var number = this.takeInput();
		var origin = this.checkOrigin();
		switch(origin) {
			case 'bin': return this.fromBin(number);
			case 'dec': return this.fromDec(number);
			default: console.log("__ERROR__");
		}
	},
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
		return toDecimalFromBase_int(number, 8, 'html');
	},
	fromHex: function(number) {
		return toDecimalFromBase_int(number, 16, 'html');
	},
	takeInput: function() {
		var input = document.getElementById("number_in");
		return input.value;
	},
	checkOrigin: function() {
		var input = document.getElementById("origin").value;
		return input;
	},
	calculate: function(from, number) {
		var number = this.takeInput();
		var origin = this.checkOrigin();
		switch(origin) {
			case 'bin': return this.fromBin(number);
			case 'oct': return this.fromOct(number);
			case 'hex': return this.fromHex(number);
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
		return toBaseFromDec_int(number, 16, 'html');
	},
	takeInput: function() {
		var input = document.getElementById("number_in");
		return input.value;
	},
	checkOrigin: function() {
		var input = document.getElementById("origin").value;
		return input;
	},
	calculate: function(from, number) {
		var number = this.takeInput();
		var origin = this.checkOrigin();
		switch(origin) {
			case 'bin': return this.fromBin(number);
			case 'dec': return this.fromDec(number);
			default: console.log("__ERROR__");
		}
	},
	addElements: function() {
		addConvertElements(this.possibleOrigins);
	}
}

var sum = {
	possibleOrigins: [binary, octal, decimal, hexademical],
	bin: function(num1, num2) {
		return sumAnyBase(num1, num2, 2, 'html');
	},
	oct: function(num1, num2) {
		return sumAnyBase(num1, num2, 10, 'html');
	},
	dec: function(num1, num2) {
		return sumAnyBase(num1, num2, 8, 'html');
	},
	hex: function(num1, num2) {
		return sumAnyBase(num1, num2, 16, 'html');
	},
	calculate: function(from) {
		var numbers = this.takeInput();
		var origin = this.checkOrigin();
		switch(origin) {
			case 'bin': return this.bin(numbers[0], numbers[1]);
			case 'dec': return this.oct(numbers[0], numbers[1]);
			case 'oct': return this.dec(numbers[0], numbers[1]);
			case 'hex': return this.hex(numbers[0], numbers[1]);
			default: console.log("__ERROR__");
		}
	},
	addElements: function() {
		addOperationElements(this.possibleOrigins);
	},
	checkOrigin: function() {
		var input = document.getElementById("origin").value;
		return input;
	},
	takeInput: function() {
		var input1 = document.getElementById("f_number");
		var input2 = document.getElementById("s_number");
		return [input1.value, input2.value];
	}
}

var nullMethod = {
	addElements: function() {
		addConvertElements(null);
	}
}
