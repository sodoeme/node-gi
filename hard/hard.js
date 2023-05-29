const app = require('express')()
const port = 4000
const fs = require('fs')

app.get('/', (req, res)=>{

    fs.readFile('employee.json',(err, data)=>{
        
        if(err){
            console.log(err)
        }
        let json = JSON.parse(data)
       res.json(json)

    })

})


app.get('/:id', (req, res)=>{
let id = Number(req.params.id)
let exist = false
    fs.readFile('employee.json',(err, data)=>{
        
        if(err){
            console.log(err)
        }
        let json = JSON.parse(data)

        for(i=0; i<json.length; i++){

            if(id===json[i].employeeID){
                exist=true
            res.json(json[i])
            return
            }
            else{
                exist =false
            }
        }

        if(!exist){
            console.log(exist)
            res.status(404).send("employee not found")
        }
     
     
    })

})

app.listen(port, () => {
    console.log(` app listening on port ${port}`)
  })