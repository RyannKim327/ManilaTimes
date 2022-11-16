const _0x0 = require("axios")
const _0x1 = require("cheerio")

let todayNews = async () => {
	let _1x0 = await _0x0.get("https://www.manilatimes.net/news")
	let _1x1 = await _0x1.load(_1x0.data)
	let _1x2 = await _1x1("div .item-row")
	let _1x3 = []
	await _1x2.each((_2x0, _2x1) => {
		let _3x0 = _1x1(_2x1).children("div .item-info-abs")
		if(_3x0.html()){
			let _3x1 = _1x1(_3x0).children(".item-info-abs-href")[0]
			let _3x2 = {
				title: _3x1.attribs.title,
				url: _3x1.attribs.href
			}
			_1x3.push(_3x2)
		}
	})
	return _1x3
}

let article = async (url) => {
	let _1x0 = await _0x0.get(url)
	let _1x1 = await _0x1.load(_1x0.data)
	let _1x2 = {}
	let _1x3 = _1x1(".article-title").text().replace(/\n/gi, "").replace(/  /gi, "").replace(/\.([\w\d])/gi, ".\n\t")
	let _1x4 = _1x1(".article-info-container")
	let _1x5 = _1x4.find(".article-author-name")[0].attribs.title
	let _1x6 = _1x4.find(".article-publish-time").text().replace(/\n/gi, "").replace(/  /gi, "")
	let _1x7 = _1x1("div .article-body-content")
	_1x2.title = _1x3
	if(_1x5 == undefined)
		_1x2.author = ""
	else
		_1x2.author = _1x5
	
	if(_1x6 == undefined)
		_1x2.date = ""
	else
		_1x2.date = _1x6
	
	if(_1x7 == undefined)
		_1x2.body = ""
	else{
		_1x2.body = _1x7.find("p").text()
	}
	return _1x2
}

module.exports = {
	todayNews,
	article
}