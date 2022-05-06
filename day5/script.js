// querySelectors
const toggleBtn = document.getElementById("toggleBtn"),
	menuBtn = document.getElementById("menuBtn"),
	nav = document.querySelector("nav")

// event listeners
window.addEventListener("load", () => {
	if (localStorage.getItem("theme") == "dark") {
		setDarkMode()
	} else if (
		window.matchMedia("(prefers-color-scheme: dark)") &&
		localStorage.getItem("theme") !== "light"
	) {
		setDarkMode()
	}
})
toggleBtn.addEventListener("click", toggleDarkMode)
menuBtn.addEventListener("click", () => nav.classList.toggle("open"))

// functions
function toggleDarkMode() {
	toggleBtn.getAttribute("name") == "moon-outline"
		? setDarkMode()
		: setLightMode()
}

function setDarkMode() {
	localStorage.setItem("theme", "dark")
	document.documentElement.classList.add("dark")
	toggleBtn.setAttribute("name", "sunny-outline")

	console.log(localStorage.getItem("theme"))
}

function setLightMode() {
	localStorage.setItem("theme", "light")
	toggleBtn.setAttribute("name", "moon-outline")

	document.documentElement.classList.remove("dark")

	console.log(localStorage.getItem("theme"))
}
