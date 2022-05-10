// querySelectors
const timer = document.querySelector(".timer"),
	startBtn = document.getElementById("start"),
	pauseBtn = document.getElementById("pause"),
	resetBtn = document.getElementById("reset"),
	options = document.querySelectorAll("[data-pomodoro]")

// variables
let mode = 25,
	stoptime,
	minutes = 25,
	initialMinutes = 25,
	seconds = 0,
	interval

options.forEach(option => {
	option.addEventListener("click", () => {
		// changing our mode
		mode = option.dataset.pomodoro

		// making all unactive
		options.forEach(option => option.classList.remove("active"))
		// then making only the clicked button active
		option.classList.add("active")

		// resetting
		reset()
	})
})

// eventListeners
startBtn.addEventListener("click", start)
pauseBtn.addEventListener("click", pause)
resetBtn.addEventListener("click", reset)

// functions

// start function
function start() {
	stoptime = false

	interval = setInterval(decreaseTime, 1000)

	// after starting the time, change the startBtn with pauseBtn
	startBtn.style.display = "none"
	pauseBtn.style.display = "block"
}

// increasetime function
function decreaseTime() {
	// increae the time if stoptime is false
	if (stoptime == false) {
		// coverting the seconds, minutes and hours to intgers, because from line 70 to 80 we made them string and added 0 before them
		seconds = parseInt(seconds)
		minutes = parseInt(minutes)

		// ofc, decreasing the seconds
		seconds--

		// increasing the minutes by one if seconds is 60. Same for minutes, hours..

		if (minutes == 0 && seconds == 0) {
			document.querySelector(".text").textContent =
				"Congrats, keep going !"

			reset()

			return
		}

		if (seconds < 0) {
			minutes--
			seconds = 59
		}

		if (seconds < 10 || seconds == 0) {
			seconds = "0" + seconds
		}

		if (minutes < 10 || minutes == 0) {
			minutes = "0" + minutes
		}

		// finally chaning the innerHTML of timer
		timer.innerHTML = `${minutes} : ${seconds}`
	}
}

function pause() {
	// toggle the value of stoptime
	stoptime = !stoptime

	// if time is paused, then show resume, else pause
	stoptime == true
		? (pauseBtn.textContent = "Resume")
		: (pauseBtn.textContent = "Pause")
}

function reset() {
	// resetting the minutes
	if (mode == "short") {
		timer.textContent = "05 : 00"
		minutes = 5
		initialMinutes = 5
	} else if (mode == "long") {
		timer.textContent = "15 : 00"
		initialMinutes = 15
		minutes = 15
	} else {
		timer.textContent = "25 : 00"
		initialMinutes = 25
		minutes = 25
	}

	// after reseting, removing the pause button and also displaying the start button to start again
	pauseBtn.style.display = "none"
	startBtn.style.display = "block"

	// clearing interval, so that it doesn't sppeds up after again staring
	clearInterval(interval)

	// resetting the seconds
	seconds = 0

	// stoptime
	stoptime = true
}
