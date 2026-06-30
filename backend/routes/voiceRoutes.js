const router=require("express").Router();



const {

voiceTask

}=require("../controllers/voiceController");



// Correct middleware file name

const auth =

require("../middleware/authMiddleware");





router.post(

"/create",

auth,

voiceTask

);





module.exports=router;