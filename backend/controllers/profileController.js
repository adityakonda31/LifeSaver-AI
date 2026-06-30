const User=require("../models/User");



exports.profile=async(req,res)=>{


const user =

await User.findById(
req.user.id
);



res.json({

name:user.name,

streak:user.streak

});


}