const router=require("express").Router();


const {
profile

}=require("../controllers/profileController");


// Correct middleware filename

const auth =
require("../middleware/authMiddleware");



router.get(

"/",

auth,

profile

);



module.exports=router;