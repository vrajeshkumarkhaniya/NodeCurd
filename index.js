const express = require ("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended :true }))

const student = [{
    id : 1,
    name : "vrajesh" ,
    age : 20 ,
}]
app.get("/getall", (req,res)=>{
    res.send(student)
})
app.post ("/add" , (req ,res)=>{
    const { name , age } = req.body;
    const newstudent = {
        id  : student.length + 1,
        name ,
        age : parseInt(age)
    }
    student.push(newstudent)
    res.status(201).json({message : "sucessfully " , data :student})
})

app.listen(5000,()=>{
    console.log("server start")
})