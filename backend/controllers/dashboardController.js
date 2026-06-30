const Task=require("../models/Task");

const Streak=require("../models/Streak");

const Goal=require("../models/Goal");




exports.dashboardData = async(req,res)=>{


try{


const tasks =
await Task.countDocuments({

user:req.user._id

});





const completed =
await Task.countDocuments({

user:req.user._id,

status:"Completed"

});






const goals =
await Goal.countDocuments({

user:req.user._id

});






const streak =
await Streak.findOne({

user:req.user._id

});







res.json({

tasks,

completed,

goals,

streak:
streak?
streak.days:
0



});





}

catch(error){


res.status(500)
.json({

error:error.message

});


}


};