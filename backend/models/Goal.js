const mongoose=require("mongoose");


const goalSchema=new mongoose.Schema({

title:{
type:String,
required:true
},


description:String,


targetDate:Date,


progress:{
type:Number,
default:0
},


status:{
type:String,
default:"Active"
}


},{
timestamps:true
});



module.exports =
mongoose.model(
"Goal",
goalSchema
);