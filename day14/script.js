// querySelectors
const input = document.querySelector("input"),
	tags = document.querySelector(".tags"),
	form = document.querySelector("form")

// eventListeners
input.addEventListener("keyup", checkKey)
document
	.querySelectorAll(".deleteBtn")
	.forEach(btn => btn.addEventListener("click", deleteItem))

form.addEventListener("submit", e => {
	e.preventDefault()
	update()
})

// functions
function checkKey(e) {
	const key = e.key

	console.log(e.key)

	if (key == "," || key == " ") update()
}

function update() {
	tags.innerHTML += `
                <div class="tag">
					<div class="email">${input.value}</div>
					<div class="deleteBtn"><img src="./Vector.png" /></div>
				</div>
            `
	input.value = ""
	input.focus()

	document
		.querySelectorAll(".deleteBtn")
		.forEach(btn => btn.addEventListener("click", deleteItem))
}

function deleteItem(e) {
	const item = e.target.closest(".tag")
	item.remove()
}

// clearing the tailwind warning message
console.clear()
