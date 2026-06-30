const cron=require("node-cron");


const Task=require("../models/Task");


const {
sendWhatsApp

}=require("./twilioService");






cron.schedule(
"* * * * *",

async()=>{


const now=new Date();



const tasks =
await Task.find({

whatsappReminder:true,

reminderSent:false,

reminderTime:{
$lte:now
}

});





for(
const task of tasks
){



await sendWhatsApp(

task.userPhone,

`

⏰ LifeSaver AI Reminder


Task:

${task.title}


Deadline:

${task.deadline}


`

);





task.reminderSent=true;


await task.save();



}



});





console.log(
"Reminder service running"
);