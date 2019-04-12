#! /usr/bin/env node

const turl = require('turl')
const clipboardy = require('clipboardy')
const chalk = require('chalk')
const longUrl = process.argv[2]

if (!longUrl) return

turl.shorten(longUrl).then((res) => {
  clipboardy.writeSync(res)
  console.log(`Result ${chalk.green(res)} Copied`)
}).catch((err) => {
  console.log(err)
});