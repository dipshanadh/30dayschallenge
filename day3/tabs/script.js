const tabHeading = document.querySelectorAll("[data-heading]"),
	tabs = document.querySelectorAll("[data-tab]")

tabHeading.forEach(heading =>
	heading.addEventListener("click", () => {
		const index = heading.dataset.heading
		console.log(index)

		tabHeading.forEach(heading => {
			heading.classList.remove("active")
		})

		heading.classList.add("active")

		tabs.forEach(tab => {
			tab.style.display = "none"

			if (tab.dataset.tab == index) tab.style.display = "block"
		})
	})
)
