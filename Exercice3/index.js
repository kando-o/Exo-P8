// Créez votre fonction ici

const calculateAverage = (tab) => {
    if (!tab || tab.length === 0) {
        return "No numbers to calculate average";
    }
    
    let sum = 0;
    for (let index = 0; index < tab.length; index++) {
        sum += tab[index];
    }
    
    return sum / tab.length;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

// export default calculateAverage
