const Task=require("../models/Task");


exports.analytics = async(req,res)=>{


try{


const total =
await Task.countDocuments({

user:req.user._id

});




const completed =
await Task.countDocuments({

user:req.user._id,

status:"Completed"

});





const pending =
await Task.countDocuments({

user:req.user._id,

status:"Pending"

});







const percentage =

total===0

?

0

:

Math.round(
(completed/total)*100
);






res.json({

total,

completed,

pending,

percentage


});





}

catch(error){


res.status(500)
.json({

error:error.message

});


}


};