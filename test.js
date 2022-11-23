const a = require("./index")

let news = async () => {
	let data = await a.todayNews()
	console.log(data)
	let art = await a.article(data[0].url)
	console.log(art)
}

news()