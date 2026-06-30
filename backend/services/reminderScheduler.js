const cron = require("node-cron");


const Task = require("../models/Task");


const sendWhatsApp =
require("./whatsappService");






// Runs every 1 minute

cron.schedule(

"* * * * *",

async()=>{



try{



const currentTime =
new Date();





const tasks =

await Task.find({

whatsappReminder:true,

reminderSent:false,

reminderTime:{
$exists:true
}


});







for(let task of tasks){





// Safety check

if(!task.phone){

console.log(
`Skipping ${task.title} - phone missing`
);

continue;

}






if(

new Date(task.reminderTime)

<=

currentTime

){






await sendWhatsApp(

task.phone,


`🔔 LifeSaver AI Reminder


Task:
${task.title}


Deadline:
${new Date(task.deadline)
.toLocaleString("en-IN")}



Priority:
${task.priority || "Normal"}



Complete it on time 🚀`

);








task.reminderSent=true;



await task.save();





console.log(

`WhatsApp reminder sent for: ${task.title}`

);



}






}





}

catch(error){


console.log(

"Reminder Scheduler Error:",

error.message

);



}



}

);