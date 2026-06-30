const express = require("express");

const router = express.Router();

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

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

return res.status(400).json({

message:"Name email password required"

});

}




const existingUser =
await User.findOne({

email

});



if(existingUser){


return res.status(400).json({

message:"User already exists"

});


}





const hashedPassword =
await bcrypt.hash(
password,
10
);





const user =
await User.create({

name,

email,

phone,

password:hashedPassword

});





const token =
jwt.sign(

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


res.status(500).json({

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




const user =
await User.findOne({

email

});





if(!user){


return res.status(400).json({

message:"User not found"

});


}







const match =
await bcrypt.compare(

password,

user.password

);





if(!match){


return res.status(400).json({

message:"Invalid password"

});


}







const token =
jwt.sign(

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


res.status(500).json({

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








router.get(

"/google/callback",

passport.authenticate(

"google",

{

failureRedirect:

"/login"

}

),


(req,res)=>{



const token =
jwt.sign(

{
id:req.user._id
},

process.env.JWT_SECRET,

{

expiresIn:"7d"

}

);



res.redirect(

`${process.env.FRONTEND_URL}/google-success?token=${token}`

);



}

);






module.exports = router;