const mongoose=require("mongoose");



const streakSchema =
new mongoose.Schema({



user:{

type:mongoose.Schema.Types.ObjectId,

ref:"User",

unique:true

},



days:{

type:Number,

default:0

},



lastCompleted:Date



},{

timestamps:true

});




module.exports =
mongoose.model(
"Streak",
streakSchema
);