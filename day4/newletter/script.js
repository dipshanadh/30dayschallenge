// querySelectors
const form = document.querySelector("form"),
	openBtn = document.getElementById("openBtn"),
	closeBtns = document.querySelectorAll("#close"),
	modalContainer = document.querySelector(".modal-container"),
	modalBg = document.querySelector(".modal-bg"),
	initalModal = document.getElementById("initial"),
	successModal = document.getElementById("success")

// functions
const createError = (element, text) => {
	const error = document.createElement("p")
	error.className = "error"
	error.textContent = text

	if (!document.querySelector(".error")) element.after(error)
}

const open = () => {
	modalContainer.style.display = "grid"
	modalBg.style.display = "block"
}

const close = () => {
	modalContainer.style.display = "none"
	modalBg.style.display = "none"
}

// eventListeners
openBtn.addEventListener("click", open)
closeBtns.forEach(btn => btn.addEventListener("click", close))
modalBg.addEventListener("click", close)

form.addEventListener("submit", e => {
	e.preventDefault()
	if (document.getElementById("email").value == "") {
		createError(form, "Please enter an email")
	} else {
		initalModal.style.display = "none"
		successModal.style.display = "block"
	}
})
