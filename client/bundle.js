(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const multiply = require('./multipier.js');

function addTextBox() {
	let idIndex = document.getElementsByTagName("input").length+1;

	let element = document.createElement("input");
	element.setAttribute("type", "text");
	element.setAttribute("value", "");
	element.setAttribute("id", "input-num" + idIndex);


	let foo = document.getElementById("new-input");
	foo.appendChild(element);
}

window.onload = function() {
	document.getElementById('newFactor').onclick = addTextBox;
}

class ViewManager {

	connectEventHandlers() {
		document.getElementById('form-numbers')
		.addEventListener(
			'submit', 
			this.onSubmit.bind(this));
	}

	onSubmit(event) {
		event.preventDefault();

		let num1 = document.getElementById(
			'input-num1').value;
		let num2 = document.getElementById(
			'input-num2').value;

		num1 = parseInt(num1, 10);
		num2 = parseInt(num2, 10);

		let product = multiply(num1, num2);		

		let idIndex = 3;

		while(document.getElementById('input-num' + idIndex)){		
			let num = document.getElementById(
			'input-num' + idIndex).value;
			console.log(num);
			num = parseInt(num, 10);

			product = multiply(product, num);

			idIndex++;
		}

		this.renderProduct([product]);
	}
	
	renderProduct(product) {
		document.querySelector('.product').textContent = product;
	}
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();
},{"./multipier.js":2}],2:[function(require,module,exports){
const multiply = function (num1, num2) {
	return num1 * num2;
};

module.exports = multiply;
},{}]},{},[1]);
