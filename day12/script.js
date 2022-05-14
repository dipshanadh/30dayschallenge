// querySelectors
const main = document.querySelector("main")

const imagesURLs = [
	"https://images.unsplash.com/photo-1650652761799-0e48a0244eac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjUzMDgwMw&ixlib=rb-1.2.1&q=80&w=1080",
	"https://images.unsplash.com/photo-1650137893224-797c939e76e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjUzMDgwNg&ixlib=rb-1.2.1&q=80&w=1080",
	"https://images.unsplash.com/photo-1652159066150-454b8beb98fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjUzMDgwOA&ixlib=rb-1.2.1&q=80&w=1080",
	"https://images.unsplash.com/photo-1650154252258-24a533c397f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjUzMDkyNQ&ixlib=rb-1.2.1&q=80&w=1080",
	"https://images.unsplash.com/photo-1650370551364-358f9cea4198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjUzMDk1OA&ixlib=rb-1.2.1&q=80&w=1080",
	"https://images.unsplash.com/photo-1651505343248-26d2400939c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjUzMDk3Mw&ixlib=rb-1.2.1&q=80&w=1080",
	"https://images.unsplash.com/photo-1650124784171-be47325e094c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjUzMDk5MQ&ixlib=rb-1.2.1&q=80&w=1080",
	"https://images.unsplash.com/photo-1651719106069-33b28b70c1cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjUzMTAwNQ&ixlib=rb-1.2.1&q=80&w=1080",
	"https://images.unsplash.com/photo-1651827104701-da2e8b1b6fcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjUzMTAzMA&ixlib=rb-1.2.1&q=80&w=1080",
	"https://images.unsplash.com/photo-1651657631926-84fbe2841426?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjUzMTA0NQ&ixlib=rb-1.2.1&q=80&w=1080",
	"https://images.unsplash.com/photo-1650132387072-da99115d370c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjUzMTA2OQ&ixlib=rb-1.2.1&q=80&w=1080",
	"https://images.unsplash.com/photo-1649932167662-b9aef8b431bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjUzMTA4Mg&ixlib=rb-1.2.1&q=80&w=1080",
]

// functions / logic
function handleImageClick(e) {
	// console.log("clicked")

	const { index } = e.target.dataset

	main.innerHTML += `
					<div class="modal-container">
						<div 
							class="modal-wrapper fixed top-0 h-[100vh] w-[100vw] z-0"
							onClick="handleWrapperClick()"
						></div>
						<img
							class="fixed top-1/2 right-5 z-50"
							data-dir="right" 
							onClick="changeImg(event)"
							data-index="${index}"
							src="./img/ic_baseline-less-than (1).png" />
						<img
							class="fixed top-1/2 left-5 z-50"
							data-dir="left" 
							onClick="changeImg(event)"
							data-index="${index}"
							src="./img/ic_baseline-less-than.png" />
						<img
							src="${imagesURLs[index]}"
							class="modal-img"
						/>
					</div>
				`
}

function handleWrapperClick(e) {
	document.querySelector(".modal-container").style.display = "none"
}

function changeImg(e) {
	let { dir, index } = e.target.dataset

	index = parseInt(index)

	if (dir == "left") {
		index == 0 ? (index = imagesURLs.length) : index - 1
		console.log(index)

		const attributeElements = document.querySelectorAll("[data-index]")

		attributeElements.forEach(element =>
			element.setAttribute("data-index", `${index}`)
		)

		let src = imagesURLs[index]
		console.log(src)
		document.querySelector(".modal-img").src = src
	} else if (dir == "right") {
		index == imagesURLs.length ? (index = 0) : index + 1

		const attributeElements = document.querySelectorAll("[data-index]")

		attributeElements.forEach(element =>
			element.setAttribute("data-index", `${index}`)
		)

		let src = imagesURLs[index]
		console.log(src)
		document.querySelector(".modal-img").src = src
	}
}

for (let i = 0; i < imagesURLs.length; i++) {
	// putting into main
	main.innerHTML += `
			<div class="h-[275px]">
				<img src="${imagesURLs[i]}" class="w-full h-full" data-index="${i}" onClick="handleImageClick(event)" />
			</div>
		`
}
