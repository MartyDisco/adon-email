const fs = require('fs')
	, { minify } = require('html-minifier')
	, juice = require('juice')
	, { renderFile } = require('pug')
	, template = file => renderFile(file, null, null)

fs.writeFile(
	'./dist/email.html'
	, minify(juice(template('./src/index.pug')), { minifyCSS: true })
	, (err) => {
		if (err) console.log(err)
		process.exit()
	}
)
