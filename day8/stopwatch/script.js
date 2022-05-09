// querySelectors
const time = document.querySelector(".time"),
	startBtn = document.getElementById("start"),
	pauseBtn = document.getElementById("pause"),
	resetBtn = document.getElementById("reset")

// variables
let hour = 0,
	minutes = 0,
	seconds = 0,
	stoptime

// eventListeners
startBtn.addEventListener("click", () => {
	start()
})

pauseBtn.addEventListener("click", pause)

resetBtn.addEventListener("click", reset)

// functions

// start function
function start() {
	// firstly setting the stoptime (our state) to false
	stoptime = false

	// increase the time every second
	setInterval(increaseTime, 1000)

	// after starting the time, change the startBtn with pauseBtn
	startBtn.style.display = "none"
	pauseBtn.style.display = "block"
}

// pause function
function pause() {
	// toggle the value of stoptime
	stoptime = !stoptime

	// if time is paused, then show resume, else pause
	stoptime == true
		? (pauseBtn.textContent = "Resume")
		: (pauseBtn.textContent = "Pause")
}

// increasetime function
function increaseTime() {
	// increae the time if stoptime is false
	if (stoptime == false) {
		// coverting the seconds, minutes and hours to intgers, because from line 70 to 80 we made them string and added 0 before them
		seconds = parseInt(seconds)
		minutes = parseInt(minutes)
		hour = parseInt(hour)

		// ofc, increasing the seconds
		seconds++

		// increasing the minutes by one if seconds is 60. Same for minutes, hours..

		if (seconds == 60) {
			minutes++
			seconds = 0
		}

		if (minutes == 60) {
			hour = hour + 1
			minutes = 0
			seconds = 0
		}

		if (seconds < 10 || seconds == 0) {
			seconds = "0" + seconds
		}

		if (minutes < 10 || minutes == 0) {
			minutes = "0" + minutes
		}

		if (hour < 10 || hour == 0) {
			hour = "0" + hour
		}

		// finally chaning the innerHTML of time
		time.innerHTML = `${hour}:${minutes}:${seconds}`
	}
}

function reset() {
	// after reseting, removing the pause button and also displaying the start button to start again
	pauseBtn.style.display = "none"
	startBtn.style.display = "block"

	// resetting the innerHTML, the hours, minutes.... and the stoptime
	time.innerHTML = "00:00:00"
	stoptime = true
	hour = 0
	minutes = 0
	seconds = 0
}
