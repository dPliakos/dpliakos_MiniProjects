

function init() {
	console.log('welcome');
}

function calculate() {
	printConversion(2, 8);
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

