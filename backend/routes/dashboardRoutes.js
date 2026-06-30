const express=require("express");

const router=express.Router();


const auth=require("../middleware/authMiddleware");


const {

dashboardData

}=require("../controllers/dashboardController");




router.get(

"/",

auth,

dashboardData

);



module.exports=router;