// Créez votre fonction ici

const calculate = (a, b, operateur) => {
	  a = +a
  	b = +b
    switch (operateur) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                return "Division by zero is not allowed";
            }
            return a / b;
        default:
            return "Invalid operator";
    }
}

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"

console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"
console.log(calculate(4, 5, '+'));   // Affiche "Invalid operator"

export default calculate
