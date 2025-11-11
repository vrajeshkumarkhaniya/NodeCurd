const express = require ("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended :true }))

const student = [{
    id : 1,
    name : "vrajesh" ,
    age : 20 ,
},
{
    id : 2,
    name : "ghyt" ,
    age : 30 ,
}]
app.get("/getall", (req,res)=>{
    res.send(student)
})
app.get("/student/:id",(req,res)=>{
    const id =parseInt(req.params.id)
    const stu =student.find((e)=> e.id==id)

    if (!stu) {
        return res.status(404).json({message : "not found"})
    }
    res.status(201).json({message : "succses", deta : stu})
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

app.put("/update/:id", (req ,res )=>{
    const id =parseInt(req.params.id)
    const { name , age } = req.body;
    const stu =student.find((e)=> e.id==id)

    if (!stu) {
        return res.status(404).json({message : "not found"})
    }
    stu.name=name
    stu.age=age
    res.status(201).json({message : "update", data : stu})
})
 app.delete("/delete/:id" ,(req , res)=>{
    const id =parseInt(req.params.id)
    const stu =student.findIndex((e)=> e.id===id)

    if (stu === -1) {
        return res.status(404).json({message : "not delet"})
    }
    student.splice(stu , 1)
    res.status(201).json({message : "delete"})
 })


app.listen(5000,()=>{
    console.log("server start")
})