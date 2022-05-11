// querySelecors and getElements
const passwordEl = document.getElementById("password"),
	copyBtn = document.getElementById("copy"),
	input = document.getElementById("length"),
	generateBtn = document.getElementById("generate"),
	img = document.querySelector("img"),
	error = document.getElementById("error"),
	numbers = document.getElementById("numbers"),
	lowercase = document.getElementById("lowercase"),
	uppercase = document.getElementById("uppercase"),
	symbols = document.getElementById("symbols")

// variables

// characters
const numbersChars = "0123456789",
	lowercaseChars = " abcdefghijklmnopqrstuvwxyz",
	uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	symbolsChars = "!@#$%^&*()"

// initialize lenth, password and characters
let length, password, characters

// eventListeners
generateBtn.addEventListener("click", generatePwd)
window.addEventListener("load", generatePwd)
copyBtn.addEventListener("click", copyPwd)

input.addEventListener("keyup", e => {
	// console.log(e.key)

	if (e.key == "Enter") {
		// console.log(input.value)
		if (input.value < 8 || input.value > 20) {
			input.value = ""

			// making a error message
			error.style.display = "block"
		} else {
			generatePwd()
		}
	}
})

// functions
function generatePwd() {
	error.style.display = "none"
	length = input.value

	// resetting the previous values
	password = ""
	characters = ""

	// adding the charactiers to our characters variable accordin the selections of user
	if (uppercase.checked) characters += uppercaseChars
	if (lowercase.checked) characters += lowercaseChars
	if (symbols.checked) characters += symbolsChars
	if (numbers.checked) characters += numbersChars

	for (let i = 0; i <= length; i++) {
		// picking a random character from the set of characters
		let randomIndex = Math.floor(Math.random() * characters.length)
		// then inserting to our password until its length is equal to the length given by the user
		password += characters.charAt(randomIndex)

		// console.log(characters.charAt(randomIndex))
	}

	passwordEl.textContent = password

	// resetting the image and its background
	img.src = "./copy-to-clipboard-line.png"
	copyBtn.style.background = "#a5a6f6"
}

function copyPwd() {
	// first changing the image and its background
	img.src = "./Vector (1).png"
	copyBtn.style.background = "#82F178"

	// copying password to clipboard
	navigator.clipboard
		.writeText(password)
		.then(() => alert("Password copied to clipboard !"))
		.catch(err => alert("Could not copy text: ", err))
}
