const express = require("express");

const router = express.Router();

const Goal = require("../models/Goal");



// Create Goal

router.post("/", async(req,res)=>{


try{


const goal = new Goal({

title:req.body.title,

targetDate:req.body.targetDate,

description:req.body.description


});


await goal.save();


res.json(goal);



}

catch(err){

res.status(500)
.json({

error:err.message

});


}


});





// Get Goals

router.get("/",async(req,res)=>{


try{


const goals =
await Goal.find();


res.json(goals);



}

catch(err){


res.status(500)
.json({

error:err.message

});


}


});







// Update Progress

router.put("/:id",async(req,res)=>{


try{


const goal =
await Goal.findById(req.params.id);



goal.progress =
req.body.progress;



if(goal.progress>=100){

goal.status="Completed";

}



await goal.save();



res.json(goal);



}

catch(err){

res.status(500)
.json({

error:err.message

});


}



});





module.exports = router;