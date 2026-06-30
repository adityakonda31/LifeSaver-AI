const Streak=require("../models/Streak");



exports.getStreak=async(req,res)=>{


try{


let streak=

await Streak.findOne({

user:req.user._id

});



if(!streak){


streak={

days:0

};


}



res.json(streak);



}

catch(error){


res.status(500)
.json({

error:error.message

});


}



}