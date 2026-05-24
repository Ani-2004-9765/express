const express =require('express');
const app = express()
app.set("view engine","ejs")

app.get("/",(req,resp)=>{
    const a=100
    resp.render("index",{a})
})

app.get("/add",(req,resp)=>{
    resp.render("add")
})
app.get("/products",(req,resp)=>{
    const pro=[
{id:1,name:"laptop",price:10000},
{id:2,name:"p",price:999},
{id:3,name:"q",price:1900},
{id:4,name:"r",price:14500}
];
resp.render("products",{pro})    
});


app.listen(5000,()=>{
    console.log("connected...");
    
})