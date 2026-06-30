const OTP=require("../models/OTP");

const User=require("../models/User");


const {
sendOTP
}=require("../services/otpService");





exports.sendOtp=async(req,res)=>{


const {
phone
}=req.body;



const otp =
Math.floor(
100000+
Math.random()*900000
)
.toString();



await OTP.create({

phone,

otp,

expiresAt:
Date.now()+300000

});



await sendOTP(
phone,
otp
);



res.json({

message:"OTP sent"

});


}







exports.verifyOtp=async(req,res)=>{


const {
phone,
otp
}=req.body;



const record =
await OTP.findOne({

phone,

otp

});



if(!record){

return res.status(400)
.json({

message:"Invalid OTP"

});

}



await User.updateOne(

{
phone
},

{
phoneVerified:true
}

);



res.json({

message:"Verified"

});


}