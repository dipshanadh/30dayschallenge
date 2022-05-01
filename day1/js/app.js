// variables and  querySelectors
const loadingBtn = document.getElementById("loadingBtn"),
	loadingImg = document.getElementById("loadingImg")

// eventListeners
// for preloader
window.addEventListener("load", () => {
	setTimeout(() => {
		loadingImg.style.display = "none"
		loadingBtn.textContent = "Loaded !"
	}, 500)
})

// functions
