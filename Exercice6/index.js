const display = document.getElementById('display');

const debug= (...args) => document.getElementById('debug').textContent += '\n' + [...args].join(' / ')
// Fonction pour ajouter un caractère (chiffre ou opérateur) dans l’écran
function appendToDisplay(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
	display.value = evaluate()
}

const evaluate = () => {
	const expr = display.value;
	let v = ["", ""]
	let part = 0
	let op = ""
	for (let i = 0; i< expr.length; i++) {
		const char = expr[i]
		if (["0","1","2","3","4","5","6","7","8","9"].includes(char))
				v[part] += char
		else {
			op += char
			part = Math.min(part + 1, 1)
		}
	}
	if (!v[0] || !v[1] || !op) return ""
	const v0 = parseInt(v[0])
	const v1 = parseInt(v[1])
	switch(op) {
		case "+": return v0 + v1
		case "-": return v0 - v1
		case "*": return v0 * v1
		case "/": return v1 == 0 ? "Division by zero is not allowed" : v0 / v1
	}
	return "this line should never been reached"
}
