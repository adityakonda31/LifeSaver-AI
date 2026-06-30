const express = require("express");

const router = express.Router();


const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const crypto = require("crypto");

const passport = require("passport");


const User = require("../models/User");





// ==========================
// REGISTER
// ==========================


router.post("/register", async(req,res)=>{


try{


const {

name,

email,

password,

phone


}=req.body;





if(!name || !email || !password){


return res.status(400)
.json({

message:"All fields required"

});

}



const existingUser = await User.findOne({
email
});



if(existingUser){


return res.status(400)
.json({

message:"User already exists"

});


}







const hashedPassword = await bcrypt.hash(
password,
10
);






const user = await User.create({

name,

email,

phone,

password:hashedPassword

});







const token = jwt.sign(

{
id:user._id
},

process.env.JWT_SECRET,

{
expiresIn:"7d"
}

);





res.json({

token,


user:{


id:user._id,

name:user.name,

email:user.email,

phone:user.phone


}


});




}


catch(error){


res.status(500)
.json({

message:error.message

});


}


});









// ==========================
// LOGIN
// ==========================


router.post("/login",async(req,res)=>{


try{


const {

email,

password

}=req.body;





const user = await User.findOne({

email

});






if(!user){


return res.status(400)
.json({

message:"User not found"

});


}







const match = await bcrypt.compare(

password,

user.password

);






if(!match){


return res.status(400)
.json({

message:"Invalid password"

});


}








const token = jwt.sign(

{
id:user._id
},

process.env.JWT_SECRET,

{
expiresIn:"7d"
}

);






res.json({

token,


user:{


id:user._id,

name:user.name,

email:user.email,

phone:user.phone


}


});





}



catch(error){


res.status(500)
.json({

message:error.message

});


}



});











// ==========================
// FORGOT PASSWORD
// ==========================


router.post("/forgot-password",async(req,res)=>{


try{


const {email}=req.body;




const user = await User.findOne({

email

});





if(!user){


return res.status(404)
.json({

message:"User not found"

});


}






const otp = crypto
.randomInt(100000,999999)
.toString();





user.resetOTP = otp;


user.resetOTPExpire =
Date.now()+10*60*1000;




await user.save();







console.log(
"PASSWORD RESET OTP:",
otp
);






res.json({

message:"OTP sent"

});




}



catch(error){


res.status(500)
.json({

message:error.message

});


}



});









// ==========================
// VERIFY OTP + RESET PASSWORD
// ==========================



router.post("/reset-password",async(req,res)=>{


try{


const {

email,

otp,

newPassword


}=req.body;







const user = await User.findOne({

email

});







if(!user){


return res.status(404)
.json({

message:"User not found"

});


}








if(

user.resetOTP !== otp ||

user.resetOTPExpire < Date.now()

){


return res.status(400)
.json({

message:"Invalid OTP"

});


}








user.password = await bcrypt.hash(

newPassword,

10

);



user.resetOTP = undefined;


user.resetOTPExpire = undefined;





await user.save();





res.json({

message:"Password reset successful"

});




}



catch(error){


res.status(500)
.json({

message:error.message

});


}



});












// ==========================
// GOOGLE LOGIN
// ==========================


router.get(

"/google",

passport.authenticate(

"google",

{

scope:[

"profile",

"email"

]

}

)

);



router.post(
"/reset-password",
async(req,res)=>{


const {
email,
otp,
password
}=req.body;




const user =
await User.findOne({

email

});



if(!user){

return res.status(404)
.json({

message:"User not found"

});

}




if(
user.resetOTP != otp ||
user.resetOTPExpire < Date.now()
){

return res.status(400)
.json({

message:"Invalid OTP"

});

}



const bcrypt =
require("bcryptjs");



user.password =
await bcrypt.hash(
password,
10
);



user.resetOTP = undefined;

user.resetOTPExpire = undefined;



await user.save();



res.json({

message:"Password updated"

});


});







// ==========================
// GOOGLE CALLBACK
// ==========================


router.get(

"/google/callback",

passport.authenticate(

"google",

{

failureRedirect:

"http://localhost:5173/login"

}

),


(req,res)=>{


const token = jwt.sign(

{

id:req.user._id

},

process.env.JWT_SECRET,

{

expiresIn:"7d"

}

);





res.redirect(

"http://localhost:5173/google-success?token="+token

);



}

);









module.exports = router;