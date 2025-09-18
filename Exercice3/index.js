// Créez votre fonction ici

const calculateAverage = (tab) => {
    if (!tab || !Array.isArray(tab) || tab.length === 0) {
        return "No numbers to calculate average";
    }
    
		return tab.reduce((s,v)=> s+v, 0)/tab.length
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
