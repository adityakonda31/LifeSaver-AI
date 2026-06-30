const express = require("express");

const router = express.Router();


const Task = require("../models/Task");

const Streak = require("../models/Streak");

const auth = require("../middleware/authMiddleware");





// CREATE TASK

router.post("/", auth, async (req,res)=>{


try{


const task = new Task({



title:req.body.title,



description:req.body.description,



deadline:req.body.deadline,



reminderTime:req.body.reminderTime,



priority:req.body.priority || "Low",



whatsappReminder:

req.body.whatsappReminder || false,



phone:req.body.phone || null,



reminderSent:false,



status:"Pending",



user:req.user._id



});





await task.save();





res.status(201).json(task);



}

catch(error){


console.log(error);


res.status(500)
.json({

error:error.message

});


}


});









// GET ONLY LOGGED USER TASKS

router.get("/", auth, async(req,res)=>{


try{


const tasks = await Task.find({

user:req.user._id

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



});









// DELETE TASK

router.delete("/:id",auth,async(req,res)=>{


try{


const task = await Task.findOneAndDelete({

_id:req.params.id,

user:req.user._id


});




if(!task){


return res.status(404)
.json({

message:"Task not found"

});


}



res.json({

message:"Task deleted"

});



}

catch(error){


res.status(500)
.json({

error:error.message

});


}



});









// COMPLETE TASK + UPDATE STREAK

router.put("/complete/:id",auth,async(req,res)=>{


try{



const task = await Task.findOne({

_id:req.params.id,

user:req.user._id


});




if(!task){


return res.status(404)
.json({

message:"Task not found"

});


}







if(task.status==="Completed"){


return res.json({

message:"Already completed",

task

});


}







task.status="Completed";


task.completedAt=new Date();



await task.save();









let streak = await Streak.findOne({

user:req.user._id

});





if(!streak){



streak = new Streak({


user:req.user._id,


days:1,


lastCompleted:new Date()



});



}

else{



streak.days += 1;


streak.lastCompleted = new Date();



}





await streak.save();








res.json({

message:"Task completed",

task,

streak


});





}

catch(error){


res.status(500)
.json({

error:error.message

});


}



});







module.exports = router;