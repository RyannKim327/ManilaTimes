# Manila Times News
### MPOP Reverse II


> This is just a simple webscrape program, that gather some news information comming from the website manilatimes.net.

### How to install
```Bash
npm install manilatimes
```

### How to use (**NodeJS:** ```await mt.todayNews()``` )
```NodeJS
const mt = require("manilatimes")

(async () => {
	let data = await mt.todayNews()
	console.log(data)
})

```

### Sample Output ( **JSON** )
```JSON
[
	{
		"title": "Sample title article",
		"url": "Article link"
	},
	{ ... }
]
```

> The process for this is still ongoing, since the article fetcher still having logical error, which is i'm trying to fix. For full code from python with beautiful soup, kindly visit [this link](https://github.com/RyannKim327/Its-Py/blob/main/WebScraping/manilatimes_scrape.py)

### How to use (**NodeJS** ```await mt.article(url)```)
```NodeJS
const mt = require("manilatimes")

(async () => {
	let data = mt.article("https://www.manilatimes.net/2022/11/17/news/harris-visit-affirms-us-commitment/1866540")
	console.log(data)
})

```

### Sample Output ( **JSON** )
```
{
	"title": "Sample Title",
	"author": "Author's Name",
	"date": "Publication Date",
	"body": "Article"
}
```
> This program isn't published on NPMJS so that, you may not still use this, but you can manually install this, by using git. In addition, here's the sample of the entire program that you may use to make life easier.

### Sample Code (**NodeJS**)
```NodeJS
const mt = require("manilatimes")

(async () => {
	let data = await todayNews()
	let data2 = await article(data.url)
	console.log(data2)
})
```

> Thank you for using this program, I hope it helps you a lot.