const fs = require('fs')  

let string = fs.readFileSync(process.argv[2]).toString()
arr = string.split('\n')
console.log(arr.length-1)
