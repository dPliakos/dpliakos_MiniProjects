function solution(from, to, number) {
//	return toDecimalFromBase_int(number, from, 'html');
//	return toBaseFromDec_int(number, to, 'html');
//	return toBaseFromBin_int("1100101011010", to, 'html');
	return toBinFromBase_int("14532", from, 'html');
}

function toDecimalFromBase_int(number, base, as='value') { //other types: html, equation
	var line1, line2, line3, line3_eval, line4, line5 ;
	line2 = line3 = line3_eval = "";
	base = Number(base);
	var strNum = number.toString();
	var length = strNum.length;

	line1 = "(" + number + ")<sub>" + base + "</sub>";
	for (var i=0; i<length; i++) {
		line2 += strNum[i] + "&times;" + base + "<sup>" + (length - i - 1) + "</sup>" + (length - i == 1 ? " =" : " + ");
		term = base == 16 ? translateHexDigit(strNum[i], 'decode') : strNum[i];
		line3 += term + "&times;" + Math.pow(base, length - i - 1) + (length - i == 1 ? " =" : " + ");
		line3_eval += term + "*" + Math.pow(base, length - i - 1) + (length - i == 1 ? " =" : " + ");
		line4 = eval(line3_eval.substring(0, line3_eval.length - 2));
	}
	line5 = "(" + number + ")<sub>" + base + "</sub> = (" + line4 + ")<sub>10</sub>";

	as = as.toLowerCase();
	if (as == 'html') return line1 + '<br/>' + line2 + '<br/>' + line3 + '<br/>' + line4 + '<br/>' + line5;
	if (as == 'equation') return line5;
	return line4
}

function toBaseFromDec_int(number, base, as='value') { //other types: html, equation
	var line1, line2 = "", line3;

	line1 = "(" + number + ")<sub>" + base + "</sub>";
	number = Number(number);

	var divident = number, divisor = base, quotient=99, remainder, result = "";
	while (quotient > 0)  {
		quotient = Math.floor(divident / divisor);
		remainder = divident % divisor ;
		result += base == 16 ?  translateHexDigit(remainder, 'encode') :  remainder;
		line2 += divident + " : " + divisor + " = " + quotient + " - remainder: " + remainder + "<br/>";
		divident = quotient;
	}
	result = Array.from(result).reverse().join('');

	line3 = "(" + number + ")<sub>10</sub> = (" + result + ")<sub>" + base + "</sub>";

	if  (as == 'html') return line1 + '<br/>' + line2 + '<br/>' + line3;
	if  (as == 'equation') return line3;
	return result;
}

function toBaseFromBin_int(t_number, base, as='equation') { //other types: html, equation
	var bits = (base == 8 ? 3: base == 16 ? 4 : -1 );
	var line1, line2 = "", line3 = "", line4="", number = t_number;
	// The length of the number must be divisible by the number of usable number of bits.
	var emptyPlaces = bits - (number.length % bits);
	number = Array(emptyPlaces + 1).join("0") + number;

	var parts = number.lenth / bits, cursor = -1, parted_number = [];
	for (var i=0; i<number.length; i++)
		parted_number[(i % bits != 0? cursor : cursor += 1)] = (typeof parted_number[cursor] == 'undefined' ? number[i] : parted_number[cursor] + number[i]);

	line1 = "(" + t_number +")<sub>2</sub>";
	for (var i=0; i<parted_number.length; i++) {
		line2 += parted_number[i] + '\t';
		line3 += Array(bits).join(' &nbsp') + Number("0b" + parted_number[i])  + '\t';
		var temp_num = Number("0b" + parted_number[i]).toString();
		line4 +=  base == 16 ? translateHexDigit(temp_num, 'encode') :  temp_num ;
	}

	line4 = "(" + t_number +")<sub>2</sub> = (" + line4 + ")<sub>" + base + "</sub>";

	if (as == 'html') return line1 + "<br/><br/>" + line2 + "<br/>" + line3 + "<br/><br/>" + line4;
	if (as == 'equation') return line4;
//	return result;
}

function toBinFromBase_int(number, base, as='value') {
	var bits = (base == 8 ? 3: base == 16 ? 4 : -1 );
	var line1, line2 = "", line3 = "", line4="";
	line1 = "(" + number + ")<sub>" + base + "</sub>";
	for (var i=0; i<number.length; i++) {
		line2 += number[i] + '&nbsp&nbsp&nbsp&nbsp ';
		var term = base == 16 ? translateHexDigit(number[i], 'decode')  : number[i];
		term = Number(term).toString(2);
		var temp = Array(bits - term.length + 1).join("0") + term; // mising zeros  + number.
		line3 += temp + '&nbsp';
		line4 += temp;

	}
	var result = line4.substring(line4.indexOf("1"), line4.length);
	line4 = "(" + number + ")<sub>" + base + "</sub> = (" + result + ")<sub>2</sub>";

	if (as == 'html') return line1 + "<br/><br/>" + line2 + "<br/>" + line3 + "<br/><br/>" + line4;
	if (as == 'equation') return line4;
	return result;
}

// operations
function sumAnyBase(num1, num2, base, as='value') { // other types: html
	var line1 = num1;
	var line2 = num2;
	var line3;
	if (base == 2) {
		line3 = Number("0b" + num1) + Number("0b" + num2);
	} else if (base == 8) {
		line3 = Number("0o" + num1) + Number("0o" + num2);
	}	else	if (base == 10) {
		line3 = Number(num1) + Number(num2);
	} else if (base == 16) {
		line3 = Number("0x" + num1) + Number("0x" + num2);
	}
	line3 = line3.toString(base).toUpperCase();
	if (as == 'value') return line3;

	var lines = [line1, line2, line3];
	var div = document.createElement("div");

	for (var i=0; i<lines.length; i++) {
		var span = document.createElement("span");
		var txt = document.createTextNode(lines[i]);
		if (i == 1) {
			var len = line1.length - line2.length;
			temp = "";
			temp += '+';
			for (var j = 0; j <len+2; j++) temp += '\xa0';
			txt = temp + txt.textContent;
			txt = document.createTextNode(txt);
			span.setAttribute("class", "underline");
		}
		span.appendChild(txt);
		div.appendChild(span);
		var br = document.createElement("br");
		div.appendChild(br);
		div.setAttribute("class", "operatonContainer");
	}
	return div;
}

//numerical systems declaration.
function NumericalSystem(name, alias, base) {
	this.name = name; this.alias = alias; this.base = base;
}

function translateHexDigit(digit, mode) {
	if (mode == 'decode') {
		digit = digit + "".toUpperCase();
		switch(digit) {
			case 'A' : return '10';
			case 'B' : return '11';
			case 'C' : return '12';
			case 'D' : return '13';
			case 'E' : return '14';
			case 'F' : return '15';
			default: return digit;
		}
	} else if (mode == 'encode') {
		digit = Number(digit);
		switch (digit) {
			case 10 : return "A";
			case 11 : return "B";
			case 12 : return "C";
			case 13 : return "D";
			case 14 : return "E";
			case 15 : return "F";
			default: return digit;
		}
	}
	return digit;
}

var binary = new NumericalSystem ("Binary", "bin", 2);
var octal = new NumericalSystem ("Octal", "oct", 8);
var decimal = new NumericalSystem ("Decimal", "dec", 10);
var hexademical = new NumericalSystem ("Hexademical", "hex", 16);
