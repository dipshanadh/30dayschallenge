// qoerSelectors
const input = document.querySelector("input"),
	form = document.querySelector("form"),
	container = document.querySelector("main"),
	submitBtn = document.getElementById("submit")

// eventListeners
form.addEventListener("submit", validate)

// functions
function validate(e) {
	e.preventDefault()
	input.value == "" ? showError() : shorten()
}

function shorten() {
	removeError()

	let url = input.value

	fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
		.then(res => res.json())
		.then(data => updateUI(data))
}

function updateUI({ result }) {
	console.log(result)

	input.value = ""

	let { full_short_link, original_link } = result

	container.innerHTML += `
            <div class="card">
				<a 
                    class="url" 
                    href="${original_link}" 
                    target="_blank">${original_link}</a>
				<a 
                    class="shortened" 
                    href="${full_short_link}" 
                    target="_blank">${full_short_link}</a>
				<button
                    class="px-4 py-1.5 rounded-md bg-Cyan hover:bg-Cyan/75 text-white font-medium"
                    onclick="copyURL(event)"
				>
					Copy !
				</button>
			</div>`
}

function showError() {
	document.querySelector(".err").classList.remove("hidden")
	input.classList.add("border-2")
}

function removeError() {
	document.querySelector(".err").classList.add("hidden")
	input.classList.remove("border-2")
}

function copyURL(e) {
	const url = e.target.previousElementSibling.getAttribute("href")

	e.target.classList.remove("bg-Cyan")
	e.target.classList.remove("hover:bg-Cyan/75")
	e.target.classList.add("bg-darkViolet")
	e.target.textContent = "Copying"

	// copying url to clipboard
	navigator.clipboard.writeText(url).then((e.target.textContent = "Copied !"))
}

console.clear()
