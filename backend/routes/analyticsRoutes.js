const express=require("express");

const router=express.Router();

const Task=require("../models/Task");

const auth=require("../middleware/authMiddleware");




router.get("/",auth,async(req,res)=>{


try{


const tasks=await Task.find({

user:req.user._id

});




const total=tasks.length;



const completed=tasks.filter(
t=>t.status==="Completed"
).length;




const pending=tasks.filter(
t=>t.status==="Pending"
).length;




const rate = total===0
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
rate

});



}

catch(err){


res.status(500).json({

error:err.message

});


}



});





module.exports=router;