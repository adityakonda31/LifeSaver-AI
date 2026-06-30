const router=require("express").Router();


const {
generatePlan

}=require("../controllers/aiController");



router.post(

"/plan",

generatePlan

);



module.exports=router;