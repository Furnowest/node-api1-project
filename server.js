const express = require("express")
const db = require("./database")

const server = express()
server.use(express.json());

server.get("/",(req, res) =>{
    res.json({message: "hello world!"})
})

server.post('/users',(req,res)=>{

})

server.get(()=>{
    
})

server.get(()=>{
    
})

server.delete(()=>{
    
})

server.put(()=>{
    
})





server.listen(5000, ()=>{
    console.log("server stared")
})
