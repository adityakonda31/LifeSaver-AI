const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const session = require("express-session");

require("dotenv").config();



const passport = require("./config/passport");



const app = express();






// ================= MIDDLEWARE =================



app.use(

cors({

origin:"http://localhost:5173",

credentials:true

})

);






app.use(

express.json()

);








// ================= SESSION =================



app.use(

session({

secret:
process.env.SESSION_SECRET || "lifesaver_secret",


resave:false,


saveUninitialized:false,


cookie:{


secure:false


}



})

);







// ================= PASSPORT =================



app.use(

passport.initialize()

);



app.use(

passport.session()

);











// ================= MONGODB CONNECTION =================



mongoose.connect(

process.env.MONGO_URI

)



.then(()=>{


console.log(

"MongoDB Connected Successfully 🚀"

);


})



.catch((error)=>{


console.log(

"MongoDB Error:",

error.message

);


});












// ================= ROUTES =================





// Tasks

app.use(

"/api/tasks",

require("./routes/taskRoutes")

);







// Goals

app.use(

"/api/goals",

require("./routes/goalRoutes")

);







// Habits

app.use(

"/api/habits",

require("./routes/habitRoutes")

);







// Streak

app.use(

"/api/streak",

require("./routes/streakRoutes")

);







// Analytics

app.use(

"/api/analytics",

require("./routes/analyticsRoutes")

);







// Dashboard

app.use(

"/api/dashboard",

require("./routes/dashboardRoutes")

);







// Authentication

app.use(

"/api/auth",

require("./routes/authRoutes")

);







// OTP

app.use(

"/api/otp",

require("./routes/otpRoutes")

);







// Profile

app.use(

"/api/profile",

require("./routes/profileRoutes")

);







// AI Planner

app.use(

"/api/ai",

require("./routes/aiRoutes")

);







// Voice Assistant

app.use(

"/api/voice",

require("./routes/voiceRoutes")

);












// ================= WHATSAPP REMINDER =================



require(

"./services/reminderScheduler"

);












// ================= TEST API =================



app.get("/",(req,res)=>{


res.send(

"LifeSaver AI Backend Running 🚀"

);


});












// ================= SERVER =================



const PORT =

process.env.PORT || 5000;






app.listen(

PORT,

()=>{


console.log(

`Server running on port ${PORT} 🚀`

);


}

);