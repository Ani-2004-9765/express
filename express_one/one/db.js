//import mongoose

const mongoose = require('mongoose');


//connection
const connectDb=()=>{
    mongoose.connect("mongodb://localhost:27017/H2_api")
.then((result) => {
    console.log("connected...");
    
}).catch((err) => {
    console.log(err);
    
});
}

const empSchema=mongoose.Schema({
name:{
    type:String,
    required:true
},
sal:{
type:Number,
min:15000,
required:true
},
department:{
    type:String,
    enum:["IT","HR","acct"],
    required:true

}
},{timestamps:true}

)
app.listen(3000, () => {
  console.log("Server running...");
});

const EmpModel=mongoose.model("emp",empSchema)
module.exports = { connectDb, EmpModel };


