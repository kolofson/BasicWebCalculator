// JavaScript Document

function getNumber_9() {
	
	"use strict";
	var screen = document.getElementById("screen_result");
	screen.removeAttribute("placeholder");
	screen.value = screen.value + "9";
	
}

function getNumber_8() {
	
	"use strict";
	var screen = document.getElementById("screen_result");
	screen.removeAttribute("placeholder");
	screen.value = screen.value + "8";
	
}

function getNumber_7() {
	
	"use strict";
	var screen = document.getElementById("screen_result");
	screen.removeAttribute("placeholder");
	screen.value = screen.value + "7";
	
}

function getNumber_6() {
	
	"use strict";
	var screen = document.getElementById("screen_result");
	screen.removeAttribute("placeholder");
	screen.value = screen.value + "6";
	
}

function getNumber_5() {
	
	"use strict";
	var screen = document.getElementById("screen_result");
	screen.removeAttribute("placeholder");
	screen.value = screen.value + "5";
	
}

function getNumber_4() {
	
	"use strict";
	var screen = document.getElementById("screen_result");
	screen.removeAttribute("placeholder");
	screen.value = screen.value + "4";
	
}

function getNumber_3() {
	
	"use strict";
	var screen = document.getElementById("screen_result");
	screen.removeAttribute("placeholder");
	screen.value = screen.value + "3";
	
}

function getNumber_2() {
	
	"use strict";
	var screen = document.getElementById("screen_result");
	screen.removeAttribute("placeholder");
	screen.value = screen.value + "2";
	
}

function getNumber_1() {
	
	"use strict";
	var screen = document.getElementById("screen_result");
	screen.removeAttribute("placeholder");
	screen.value = screen.value + "1";
	
}

function getNumber_0() {
	
	"use strict";
	var screen = document.getElementById("screen_result");
	screen.removeAttribute("placeholder");
	screen.value = screen.value + "0";
	
}

function add() {
	
	"use strict";
	var screen = document.getElementById("screen_result");
	var screenText = document.getElementById("screen_result").value;
	var lastCharIndex = (screenText.length - 1);
	var lastChar = screenText[lastCharIndex];
	
	try {
		
		if (lastChar === "+") throw "You already chose an operator";
		
		else if (lastChar === "-") throw "You already chose an operator";
		
		else if (lastChar === "/") throw "You already chose and operator";
		
		else if (lastChar === "*") throw "You already chose and operator";
		
		else {
			
			screen.value = screen.value + "+";
			
		}
	}
	
	catch (err) {
		
		document.getElementById("errorAlert").innerHTML = "Error: " + err + ".";
			
	}
		
	
	
}

function divide() {
	
	
	"use strict";
	var screen = document.getElementById("screen_result");
	var screenText = document.getElementById("screen_result").value;
	var lastCharIndex = (screenText.length - 1);
	var lastChar = screenText[lastCharIndex];
	
	try {
		
		if (lastChar === "+") throw "You already chose an operator";
		
		else if (lastChar === "-") throw "You already chose an operator";
		
		else if (lastChar === "/") throw "You already chose and operator";
		
		else if (lastChar === "*") throw "You already chose and operator";
		
		else {
			
			screen.value = screen.value + "/";
			
		}
	}
	
	catch (err) {
		
		document.getElementById("errorAlert").innerHTML = "Error: " + err + ".";
			
	}
	
}

function multiply() {
	
	
	"use strict";
	var screen = document.getElementById("screen_result");
	var screenText = document.getElementById("screen_result").value;
	var lastCharIndex = (screenText.length - 1);
	var lastChar = screenText[lastCharIndex];
	
	try {
		
		if (lastChar === "+") throw "You already chose an operator";
		
		else if (lastChar === "-") throw "You already chose an operator";
		
		else if (lastChar === "/") throw "You already chose an operator";
		
		else if (lastChar === "*") throw "You already chose an operator";
		
		else {
			
			screen.value = screen.value + "*";
			
		}
	}
	
	catch (err) {
		
		document.getElementById("errorAlert").innerHTML = "Error: " + err + ".";
			
	}
	
}

function subtract() {
	
	
	"use strict";
	var screen = document.getElementById("screen_result");
	var screenText = document.getElementById("screen_result").value;
	var lastCharIndex = (screenText.length - 1);
	var lastChar = screenText[lastCharIndex];
	
	try {
		
		if (lastChar === "+") throw "You already chose an operator";
		
		else if (lastChar === "-") throw "You already chose an operator";
		
		else if (lastChar === "/") throw "You already chose and operator";
		
		else if (lastChar === "*") throw "You already chose and operator";
		
		else {
			
			screen.value = screen.value + "-";
			
		}
	}
	
	catch (err) {
		
		document.getElementById("errorAlert").innerHTML = "Error: " + err + ".";
			
	}
	
}

function reset() {
	
	"use strict";
	document.getElementById("screen_result").placeholder = "0";
	document.getElementById("screen_result").value = "";
	document.getElementById("errorAlert").innerHTML = "";
}

function submit() {
	
	"use strict";
	var equation = document.getElementById("screen_result").value;
	var lastIndex = (equation.length - 1);
	
	//check for invalid operations
	if (equation[lastIndex] === "+" || equation[lastIndex] === "-" || equation[lastIndex] === "/" || equation[lastIndex] === "*") {
			
    	document.getElementById("errorAlert").value = "That's not a valid operation";
	}
	
	else if (equation[0] === "+" || equation[0] === "-" || equation[0] === "/" || equation[0] === "*") {
			 
		document.getElementById("errorAlert").value = "That's not a valid equation";
	
	}
	
	//solve for valid operations
	
	if (equation.includes("+")) {
		
		var index = equation.indexOf("+");
		var n1 = equation.substring(0, index++);
		var n2 = equation.substring(index, equation.length);
		var result = parseInt(n1) + parseInt(n2);
		document.getElementById("screen_result").value = result;
		
	} 
	
	else if (equation.includes("-")) {
		
		var index = equation.indexOf("-");
		var n1 = equation.substring(0, index++);
		var n2 = equation.substring(index, equation.length);
		var result = parseInt(n1) - parseInt(n2);
		document.getElementById("screen_result").value = result;
	}
	
	else if (equation.includes("/")) {
		
		var index = equation.indexOf("/");
		var n1 = equation.substring(0, index++);
		var n2 = equation.substring(index, equation.length);
		var result = parseInt(n1) / parseInt(n2);
		document.getElementById("screen_result").value = result;
	}
	
	else if (equation.includes("*")) {
		
		var index = equation.indexOf("*");
		var n1 = equation.substring(0, index++);
		var n2 = equation.substring(index, equation.length);
		var result = parseInt(n1) * parseInt(n2);
		document.getElementById("screen_result").value = result;
	}
	
}
