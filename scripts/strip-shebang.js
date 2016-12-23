'use strict'

const path = require('path')
const map = require('map-stream')
const vfs = require('vinyl-fs')

const pkg = require(path.resolve(__dirname, '../package.json'))
const node_modules = path.resolve(__dirname, '../node_modules')
const globs = pkg["strip-shebang"] || ['**/*.js']

vfs.src(globs, {cwd: node_modules, base: node_modules})
	.pipe(map((file, cb) => {
		file.contents = Buffer(file.contents.toString().replace(/^\s*#.*/gm, m => {
			console.warn(`from: ${file.path} - strip: ${m} `)

			return ''
		}))
		cb(null, file)
	}))
	.pipe(vfs.dest(node_modules))