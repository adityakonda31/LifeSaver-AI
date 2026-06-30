const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({





name:{


type:String,


required:true


},







email:{


type:String,


required:true,


unique:true


},







password:{


type:String,


required:function(){


return !this.googleId;


}


},







phone:{


type:String,


default:null


},







phoneVerified:{


type:Boolean,


default:false


},







googleId:{


type:String,


default:null


},







profileImage:{


type:String,


default:null


},







// PRODUCTIVITY FEATURES

streak:{


type:Number,


default:0


},







lastCompletedDate:{


type:Date,


default:null


},







// FORGOT PASSWORD FEATURE


resetPasswordOTP:{


type:String,


default:null


},






resetPasswordExpire:{


type:Date,


default:null


},







// ACCOUNT SECURITY


isVerified:{


type:Boolean,


default:false


},







createdAt:{


type:Date,


default:Date.now


}





});






module.exports = mongoose.model(

"User",

userSchema

);