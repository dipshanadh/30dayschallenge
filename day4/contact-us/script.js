const form = document.querySelector("form"),
	nameInput = document.getElementById("name"),
	email = document.getElementById("email"),
	message = document.getElementById("message")

form.addEventListener("submit", e => {
	e.preventDefault()

	const errors = document.querySelectorAll(".error")
	errors.forEach(err => (err.style.display = "none"))

	if (nameInput.value == "") {
		createError("Please enter full name", nameInput)
	} else if (email.value == "") {
		createError("Please enter email address", email)
	} else if (message.value == "") {
		createError("Please write a message", message)
	} else {
		form.innerHTML = `
        <div style="margin: auto">
        <h1>Thanks</h1>
        <p>We will get back to you shortly!</p>
        </div>
        `
	}
})

function createError(text, element) {
	error = document.createElement("p")
	error.className = "error"
	error.textContent = text

	element.after(error)
}
