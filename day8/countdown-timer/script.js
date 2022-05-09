let days = document.querySelector(".days"),
	hours = document.querySelector(".hours"),
	minutes = document.querySelector(".minutes"),
	seconds = document.querySelector(".seconds")

const countDown = () => {
	// first take the deadline and  use .getTime() to convert into milisecond
	const deadline = new Date("June 1, 2022 00:00:00").getTime()
	// similary convert todays date to miliseconds
	const todaysDate = new Date().getTime()
	// now find the difference by substracting
	// here we converted all things to milisecond so that we can find the diffrence and show up in tha page
	const difference = deadline - todaysDate

	// how does the time work ?
	const second = 1000 // here one second is 1000 milisecond
	const minute = second * 60
	const hour = minute * 60
	const day = hour * 24

	// now we have the gap, so we can calculate the remaining day, hour, minute and second

	// calculate the day
	const remainingDays = Math.floor(difference / day) // find the remaining day and convert it to an integer

	// calculate the remaining hours by finding the remainder of days
	const remainingHours = Math.floor((difference % day) / hour)

	// calculate the remaining minutes
	const remainingMinutes = Math.floor((difference % hour) / minute)

	// calculate the remainig seconds
	const remainingSeconds = Math.floor((difference % minute) / second)

	days.textContent = remainingDays
	hours.textContent = remainingHours
	minutes.textContent = remainingMinutes
	seconds.textContent = remainingSeconds

	if (deadline == todaysDate) {
		document.querySelector(
			".countdown"
		).innerHTML = `<p>The time has finished. Stay tuned for future giveaways. !`
	}
}

setInterval(countDown, 1000)
