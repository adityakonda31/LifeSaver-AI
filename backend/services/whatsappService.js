const twilio = require("twilio");


const client = twilio(

process.env.TWILIO_ACCOUNT_SID,

process.env.TWILIO_AUTH_TOKEN

);



const sendWhatsApp = async(
phone,
taskTitle
)=>{


try{


await client.messages.create({

from:
process.env.TWILIO_WHATSAPP_NUMBER,


to:
`whatsapp:${phone}`,


body:

`🔔 LifeSaver AI Reminder

Task:
${taskTitle}

Don't forget to complete it 🚀`


});



console.log(
"WhatsApp sent successfully"
);



}


catch(error){


console.log(
"WhatsApp Error:",
error.message
);



}



};




module.exports =
sendWhatsApp;