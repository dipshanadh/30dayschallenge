const button = document.getElementById("button"),
	id = document.getElementById("id"),
	advice = document.getElementById("advice")

button.addEventListener("click", e => {
	console.log("Clicked !")
	update()
})

function update() {
	advice.textContent = "Loading advice..."
	id.textContent = "advice"

	fetch("https://api.adviceslip.com/advice")
		.then(res => res.json())
		.then(({ slip }) => {
			id.textContent = `advice #${slip.id}`
			advice.textContent = `"${slip.advice}"`
		})

	console.log("Loaded !")
}

update()
console.clear()
