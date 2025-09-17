const input = document.getElementById('decimalInput');
const result = document.getElementById('binaryResult');

function convertToBinary() {
  // on enlève les espaces, tab
  const raw = input.value.trim();

  // Si c’est vide → on prévient l’utilisateur
  if (raw === '') {
    result.textContent = 'Veuillez entrer un nombre.';
    return; // on arrête la fonction ici
  }

  // ransforme le texte en nombre
  const num = Number(raw);

  // Si ce n’est pas un nombre valide OU pas un entier → message d’erreur
  if (!Number.isFinite(num) || !Number.isInteger(num)) {
    result.textContent = 'Entrez un entier (ex : 10).';
    return;
  }

  // On note si le nombre est négatif pour remettre le signe à la fin
  const isNegative = num < 0;

  // 8)  change en valeur absolue (toujours positive) pour la conversion
  let n = Math.abs(num);

  // si l'utilisateur entre 0, le binaire est "0"
  if (n === 0) {
    result.textContent = '0';
    return;
  }

  // On construit la chaîne binaire petit à petit
  let bits = '';
  while (n > 0) {
    // On prend le reste de la division par 2 (0 ou 1) et on le met DEVANT
    bits = (n % 2) + bits;

    // On divise n par 2 et on garde uniquement la partie entière
		// arondi vers le bas
    n = Math.floor(n / 2);
  }

  // Si le nombre de départ était négatif, on remet le signe "-"
  result.textContent = isNegative ? '-' + bits : bits;
}

// On rend la fonction visible globalement pour que le HTML (onclick) puisse l'appeler
window.convertToBinary = convertToBinary;
