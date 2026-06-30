const express=require("express");

const router=express.Router();


const auth=require("../middleware/authMiddleware");


const {
getStreak

}=require("../controllers/streakController");



router.get(

"/",

auth,

getStreak

);



module.exports=router;