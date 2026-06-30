const express = require("express");

const router = express.Router();

const Habit = require("../models/Habit");

const auth = require("../middleware/authMiddleware");





// CREATE HABIT

router.post("/",auth,async(req,res)=>{


try{


const habit = new Habit({

name:req.body.name,

user:req.user._id


});


await habit.save();


res.json(habit);



}
catch(err){

res.status(500)
.json({
error:err.message
})

}


});









// GET HABITS


router.get("/",auth,async(req,res)=>{


try{


const habits = await Habit.find({

user:req.user._id

});


res.json(habits);


}
catch(err){

res.status(500)
.json({
error:err.message
})

}


});









// COMPLETE HABIT


router.put(
"/complete/:id",
auth,
async(req,res)=>{


try{


const habit = await Habit.findOne({

_id:req.params.id,

user:req.user._id

});



habit.completedDates.push(new Date());



await habit.save();



res.json({

message:"Habit completed",

habit

});


}
catch(err){

res.status(500)
.json({
error:err.message
})

}


});







module.exports = router;