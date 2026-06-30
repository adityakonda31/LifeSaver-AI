const mongoose = require("mongoose");



const taskSchema = new mongoose.Schema({



title:{


type:String,


required:true,


trim:true


},






description:{


type:String,


default:""


},






deadline:{


type:Date,


required:true


},






reminderTime:{


type:Date,


default:null


},






priority:{


type:String,


enum:[

"Low",

"Medium",

"High"

],


default:"Low"


},







whatsappReminder:{


type:Boolean,


default:false


},






phone:{


type:String,


default:"",


trim:true


},






reminderSent:{


type:Boolean,


default:false


},






reminderSentAt:{


type:Date,


default:null


},






status:{


type:String,


enum:[

"Pending",

"Completed"

],


default:"Pending"


},






completedAt:{


type:Date,


default:null


},






user:{


type:mongoose.Schema.Types.ObjectId,


ref:"User",


required:true


}





},{

timestamps:true

});







module.exports = mongoose.model(

"Task",

taskSchema

);