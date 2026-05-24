const express = require('express');
const{connectDb,EmpModel}=require('./db');
// const { log } = require('node:console');
const app=express()
app.use(express.json())
connectDb()

//show
app.get("/showEmp",async(req,resp)=>{
    try {
      const result= await EmpModel.find()
      resp.json(result)  
    } catch (error) {
        console.log(error);
        
    }
})

//add
app.post("/addEmp",async(req,resp)=>{
    try {
        const data=new EmpModel({
            name:req.body.name,
            sal:req.body.sal,
            department:req.body.department
        })
         const result= await data.save()
        console.log(result);
        resp.json({message:"data inserted.."})

    } catch (error) {
        console.log(error);
        
    }
})

//delete
app.delete("/deleteEmp/:id",async(req,resp)=>{
    try {
        const result=await EmpModel.findByIdAndDelete(req.params.id)
        resp.json(result)
    } catch (error) {
        console.log(error);
        
    }
})

//update
app.patch("/upadteEmp/:id",async(req,resp)=>{
    try {
        EmpModel.findByIdAndUpdate(req.params.id, req.body, {
  new: true,
})
        resp.json(result)
    } catch (error) {
        console.log(error);
        
    }
})
app.listen(3000, () => {
    console.log("Server running on port 3000");
})