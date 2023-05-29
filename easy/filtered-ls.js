const fs = require('fs')

function list(files, filter){
    fs.readdir(files, 'utf8', (err, data)=>{
       data.forEach(file=>{
        type= file.split('.')[1]
        if(type==filter)
        console.log(file)
       })
    })
}
list(process.argv[2], process.argv[3] )