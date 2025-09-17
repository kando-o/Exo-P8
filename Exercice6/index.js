// index.js

const display = document.getElementById('display');

// Fonction pour ajouter un caractère (chiffre ou opérateur) dans l’écran
function appendToDisplay(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
	// on prend ce qui est écrit dans l’écran et on enlève les espaces
  const expr = display.value.trim();
	// si c’est vide, on ne fait rien
  if (!expr) return;

  // Autoriser uniquement chiffres et opérateurs + - * /
  if (!/^[0-9+\-*/\s]+$/.test(expr)) {
    display.value = 'Erreur';
    return;
  }

  try {
		// calcule directement la chaîne comme du JS
		const result = eval(expr)
		// Si le résultat est bien un nombre valide, on l’affiche, sinon erreur
    display.value = Number.isFinite(result) ? String(result) : 'Erreur';
  } catch {
    display.value = 'Erreur';
  }
}

// On rend les fonctions accessibles globalement (car le HTML appelle appendToDisplay(), etc.)
// 
window.appendToDisplay = appendToDisplay;
window.clearDisplay = clearDisplay;
window.calculateResult = calculateResult;
