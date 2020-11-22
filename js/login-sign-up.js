function check() {
	let input = document.getElementById("password").value;
	let input_confirm = document.getElementById("confirm-password").value;

	let match = document.getElementById("match");
	let length = document.getElementById("length");
	let cap = document.getElementById("cap");
	let num = document.getElementById("num");

	if (
		(input === input_confirm) &
		(input.length != 0) &
		(input_confirm.length != 0)
	) {
		match.style.color = "green";
	} else {
		match.style.color = "red";
	}

	if (input.length < 8) {
		length.style.color = "red";
	} else {
		length.style.color = "green";
	}

	if (input.toUpperCase().toLowerCase() === input) {
		cap.style.color = "red";
	} else {
		cap.style.color = "green";
	}

	let hasNumber = false;
	for (let index = 0; index < input.length; index++) {
		const element = input[index];

		if ((element >= "0") & (element <= "9")) {
			hasNumber = true;
		}
	}

	if (hasNumber) {
		num.style.color = "green";
	} else {
		num.style.color = "red";
	}
}
