const Task=require("../models/Task");

const User=require("../models/User");



// CREATE TASK

exports.createTask=async(req,res)=>{


try{


const task=

await Task.create({

userId:req.user.id,

...req.body

});



res.json(task);


}

catch(error){


res.status(500)
.json({

error:error.message

});


}


}






// GET ALL TASKS


exports.getTasks=async(req,res)=>{


try{


const tasks=

await Task.find({

userId:req.user.id

})
.sort({

createdAt:-1

});



res.json(tasks);


}

catch(error){


res.status(500)
.json({

error:error.message

});


}


}






// UPDATE TASK + STREAK


exports.updateTask=async(req,res)=>{


try{


const task=

await Task.findOneAndUpdate(

{

_id:req.params.id,

userId:req.user.id

},

req.body,

{

new:true

}

);





if(req.body.status==="Completed"){



const user=

await User.findById(

req.user.id

);




const today=new Date();



if(user.lastCompletedDate){


const last=

new Date(
user.lastCompletedDate
);



const diff=

Math.floor(

(today-last)

/ 

(1000*60*60*24)

);




if(diff===1){


user.streak +=1;


}


else if(diff>1){


user.streak=1;


}



}

else{


user.streak=1;


}




user.lastCompletedDate=today;


await user.save();



}






res.json(task);



}

catch(error){


res.status(500)

.json({

error:error.message

});


}


}








// DELETE TASK  <-- THIS WAS MISSING


exports.deleteTask=async(req,res)=>{


try{


await Task.findOneAndDelete({

_id:req.params.id,

userId:req.user.id

});



res.json({

message:"Task Deleted"

});


}

catch(error){


res.status(500)

.json({

error:error.message

});


}


}