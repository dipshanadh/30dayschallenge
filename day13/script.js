// querySelectors
const cards = document.querySelectorAll(".card"),
	weeks = document.querySelectorAll(".week")

// eventListeners

// applying eventListeners to all weeks
weeks.forEach(week => {
	week.addEventListener("click", () => {
		// convert the no. of week to integer and assign to current weeks
		let currentWeeks = parseInt(week.dataset.week)

		// changeTab and filtercard
		changeTab(week)
		filterCard(currentWeeks)

		let err = document.querySelector(".error")

		// if current week is 4, which is in future display error
		currentWeeks === 3
			? err.classList.remove("hidden")
			: err.classList.add("hidden")
	})
})

// functions

// filtering the cards
const filterCard = function (weeks = 0) {
	// by default filtring first week

	// looping all cards to check if there are in the particular week
	cards.forEach(card => {
		// getting the card back if they were filtered out last time
		card.style.display = "block"

		// getting the week of the card by dividing its days by 7 and converting to the lowest integer value
		let cardWeeks = Math.floor(parseInt(card.dataset.day) / 7)

		// filtering if it is not in the selected weeks
		if (weeks !== cardWeeks) {
			// console.log(true)
			card.style.display = "none"
		}
	})
}

// changing the active tab
const changeTab = function (week) {
	// first removing active class from any other
	weeks.forEach(week => week.classList.remove("active"))

	// then putting the active class to the one which was clicked
	week.classList.add("active")
}

// immediately filtering cards
filterCard()
