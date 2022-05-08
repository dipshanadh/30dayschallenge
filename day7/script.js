// querySelectors
let timeContainers = document.querySelectorAll(".time-container")

setInterval(() => updateUI(), 1000)
// updateUI()

// functions
function updateUI() {
	timeContainers.forEach(timeContainer => {
		let timezone = timeContainer.dataset.timezone

		let { text, calender } = getTime(timezone)

		let place

		switch (timezone) {
			case "America/New_York":
				place = "USA"
				break

			case "America/Mexico_City":
				place = "Mexico"
				break

			case "Asia/Dhaka":
				place = "Bhutan"
				break

			case "Asia/Dubai":
				place = "Dubai"
				break

			case "Australia/Sydney":
				place = "Australia"
				break

			default:
				place = "Kathmandu"
				break
		}

		let HTML = `
            <h3>${place}</h3>
            <div class="time">${text}</div>
            <p class="date">${calender}</p
        `

		timeContainer.innerHTML = HTML
	})
}

function getTime(timezone) {
	let date = new Date()

	// getting the time
	let newDate = date.toLocaleString("en-US", { timeZone: `${timezone}` })
	let time = newDate.split(",")
	let text = time[1]

	// getting the date
	let month = date.getMonth(),
		day = date.getDate(),
		year = date.getFullYear()

	switch (month) {
		case 0:
			month = "Jan"
			break
		case 1:
			month = "Feb"
			break
		case 2:
			month = "March"
			break
		case 3:
			month = "April"
			break
		case 4:
			month = "May"
			break
		case 5:
			month = "June"
			break
		case 6:
			month = "July"
			break
		case 7:
			month = "Aug"
			break
		case 8:
			month = "Sep"
			break
		case 9:
			month = "Oct"
			break
		case 10:
			month = "Nov"
			break
		case 11:
			month = "Dec"
			break
	}

	let calender = `${day} ${month}, ${year}`

	return { text, calender }
}
