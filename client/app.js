const multiply = require('./multipier.js');

class ViewManager {
/*
	connectEventHandlers() {
		document.getElementById('newFactor')
		.addEventListener(
			'submit',
			this.onAddFactor.bind(this));
	}

	onAddFactor(event) {
		let form = document.getElementById("form-numbers");
		let input = document.createElement("input");

		input.type = "text";
		let br = document.createElement("br");
		form.appendChild(input);
		form.appendChild(br);
	}
*/
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

			num = parseInt(num, 10);
			console.log(num);

			product = multiply(product, num);

			idIndex++;
		}

		this.renderProduct([product]);
	}

		/*let num1 = document.getElementById(
			'input-num1').value;
		let num2 = document.getElementById(
			'input-num2').value;

		num1 = parseInt(num1, 10);
		num2 = parseInt(num2, 10);

		const product = multiply(num1, num2);		

		this.renderProduct([product]);
	}*/
	
	renderProduct(product) {
		document.querySelector('.product').textContent = product;
	}
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();