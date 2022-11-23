const axios = require("axios")
const cheerio = require("cheerio")

let todayNews = async () => {
	let { data } = await axios.get("https://www.manilatimes.net/news")
	let $ = await cheerio.load(data)
	let html = $("div[class='item-row-1 pos-relative']")
	let array = []
	html.each((i, e) => {
		let base = $(e).find(".item-info-abs-href")
		let url = base.attr("href")
		let title = base.attr("title")
		let date = $(e).find(".roboto-a").text().replace(/  /gi, "").replace(/\n/gi, "")
		let json = {
			title,
			url,
			date
		}
		array.push(json)
	})
	return array
}

let article = async (url) => {
	let { data } = await axios.get(url)
	let $ = await cheerio.load(data)
	let html = $("container article")
	let title = $("h1[class='article-title font-700 roboto-slab-3 tdb-title-text']").text().replace(/  /gi, "").replace(/\n/gi, "")
	let date = $("div[class='article-publish-time roboto-a']").text().replace(/  /gi, "").replace(/\n/gi, "")
	let author = $("a[class='article-author-name roboto-a']").text().replace(/  /gi, "").replace(/\n/gi, "")
	let content = $("div[class='article-body-content']")
	let body = []
	let p = $(content)
	p.each((i, e) => {
		let c = $(e).text().replace(/  /gi, "").replace(/\n\n\n/gi, "")
		body.push(c)
	})
	return {
		title,
		date,
		author,
		body
	}
}

module.exports = {
	article,
	todayNews
}