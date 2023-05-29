const fs = require('fs')

fs.readFile(process.argv[2], 'utf8', (err, data)=>{
    string = data.toString().split('\n')
    console.log(string.length-1)
})