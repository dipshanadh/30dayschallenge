// querySelectors
const items = document.querySelectorAll(".item")

// eventListeners
items.forEach(item => {
	item.addEventListener("click", () => activate(item))
})

// functions
function activate(item) {
	if (!item.classList.contains("active"))
		items.forEach(item => item.classList.remove("active"))

	item.classList.toggle("active")
}
