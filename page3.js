//import os module
const os = require(`os`)
console.log(`operating system =${os.platform()}`)
console.log(`memory =${os.totalmem()} byte`)
const cpus = os.cpus()
console.log(`no of cpus =${cpus.length}`)
