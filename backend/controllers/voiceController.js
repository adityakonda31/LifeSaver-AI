const {
parseTask

}=require("../services/geminiService");


const Task=require("../models/Task");





exports.voiceTask =
async(req,res)=>{


try{


const {

command

}=req.body;





const taskData =
await parseTask(command);






const task =
await Task.create({

userId:req.user.id,


title:
taskData.title,


description:
taskData.description,


deadline:
taskData.deadline,


priority:
taskData.priority


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