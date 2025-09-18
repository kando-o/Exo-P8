const input = document.getElementById('decimalInput');
const result = document.getElementById('binaryResult');

function convertToBinary() {
  const raw = input.value.trim();

	// Si c’est vide → on clean le résultat et on autorise uniquement les chiffres
  result.textContent = (raw === '' || isNaN(parseInt(raw)) || (!/^\d*$/.test(raw))) ? '' : Number(raw).toString(2)
}

// On rend la fonction visible globalement pour que le HTML (onclick) puisse l'appeler
window.convertToBinary = convertToBinary;
