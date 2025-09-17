const myBtn = document.getElementById("myButton")

myBtn.addEventListener('click', ()=> {
	myBtn.nextElementSibling.textContent ="Bonjour, vous avez cliqué sur le bouton"
})